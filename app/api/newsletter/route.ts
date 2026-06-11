import { NextRequest, NextResponse } from 'next/server'
import { NewsletterSchema } from '@/lib/validations'
import { resendClient } from '@/lib/resend'

export async function POST(request: NextRequest) {
  // 1. Parse and validate
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, errors: { email: 'Invalid request body' } },
      { status: 400 }
    )
  }

  const parsed = NewsletterSchema.safeParse(body)
  if (!parsed.success) {
    const errors = Object.fromEntries(
      parsed.error.issues.map((issue) => [
        issue.path.join('.') || 'email',
        issue.message,
      ])
    )
    return NextResponse.json({ ok: false, errors }, { status: 400 })
  }

  const { email } = parsed.data
  const audienceId = process.env.RESEND_AUDIENCE_ID

  // 2. Add to Resend audience
  try {
    if (!audienceId || audienceId === 'placeholder-audience-id') {
      // Dev/test mode: skip Resend call
      console.info(`[/api/newsletter] Dev mode — would subscribe: ${email}`)
      return NextResponse.json({ status: 'subscribed' })
    }

    const result = await resendClient.contacts.create({
      audienceId,
      email,
      unsubscribed: false,
    })

    // Check for duplicate (Resend returns an error with a specific message)
    if (result.error) {
      const errorMessage = result.error.message?.toLowerCase() ?? ''
      if (
        errorMessage.includes('already exists') ||
        errorMessage.includes('duplicate')
      ) {
        return NextResponse.json({ status: 'already_subscribed' })
      }
      console.error('[/api/newsletter] Resend error:', result.error)
      return NextResponse.json(
        { error: 'subscription_failed' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 'subscribed' })
  } catch (err) {
    console.error('[/api/newsletter] Unexpected error:', err)
    return NextResponse.json(
      { error: 'subscription_failed' },
      { status: 500 }
    )
  }
}
