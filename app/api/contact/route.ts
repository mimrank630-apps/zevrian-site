import { NextRequest, NextResponse } from 'next/server'
import { ContactFormSchema } from '@/lib/validations'
import { checkRateLimit } from '@/lib/rate-limit'
import { resendClient } from '@/lib/resend'
import { buildEmailHtml, buildEmailText } from '@/lib/email-templates'

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return 'unknown'
}

export async function POST(request: NextRequest) {
  // 1. Rate limiting
  const ip = getClientIp(request)
  const { limited } = checkRateLimit(ip)
  if (limited) {
    return NextResponse.json(
      { ok: false, error: 'rate_limited' },
      { status: 429 }
    )
  }

  // 2. Parse and validate body
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, errors: { _root: 'Invalid JSON body' } },
      { status: 400 }
    )
  }

  const parsed = ContactFormSchema.safeParse(body)
  if (!parsed.success) {
    const errors = Object.fromEntries(
      parsed.error.issues.map((issue) => [
        issue.path.join('.') || '_root',
        issue.message,
      ])
    )
    return NextResponse.json({ ok: false, errors }, { status: 400 })
  }

  const data = parsed.data

  // 3. Build email
  const fields: Record<string, string> = {}
  for (const [key, value] of Object.entries(data)) {
    if (key !== 'formType' && value !== undefined) {
      fields[key] = String(value)
    }
  }

  const ctx = {
    formType: data.formType as 'general' | 'supplier' | 'partnership',
    fields,
    submittedAt: new Date().toISOString(),
    ipAddress: ip,
  }

  const subject =
    data.formType === 'general'
      ? `New General Inquiry: ${(data as { subject: string }).subject}`
      : data.formType === 'supplier'
      ? `New Supplier Inquiry from ${(data as { company: string }).company}`
      : `New Partnership Request from ${(data as { organisation: string }).organisation}`

  // 4. Send via Resend
  try {
    const { error } = await resendClient.emails.send({
      from: 'ZEVRIAN Contact <noreply@zevrian.com>',
      to: [process.env.CONTACT_EMAIL_TO ?? 'info@zevrian.com'],
      subject,
      html: buildEmailHtml(ctx),
      text: buildEmailText(ctx),
    })

    if (error) {
      console.error('[/api/contact] Resend error:', error)
      return NextResponse.json(
        { ok: false, error: 'delivery_failed' },
        { status: 500 }
      )
    }
  } catch (err) {
    console.error('[/api/contact] Unexpected error:', err)
    return NextResponse.json(
      { ok: false, error: 'delivery_failed' },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
