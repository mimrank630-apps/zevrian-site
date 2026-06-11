export interface EmailTemplateContext {
  formType: 'general' | 'supplier' | 'partnership'
  fields: Record<string, string>
  submittedAt: string
  ipAddress: string
}

function fieldRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 0;font-weight:600;color:#0F0F0F;width:160px;vertical-align:top;">${label}</td>
    <td style="padding:8px 0;color:#374151;">${value ?? '—'}</td>
  </tr>`
}

export function buildEmailHtml(ctx: EmailTemplateContext): string {
  const { formType, fields, submittedAt, ipAddress } = ctx

  const formTitles: Record<string, string> = {
    general: 'General Business Inquiry',
    supplier: 'Supplier Inquiry',
    partnership: 'Partnership Request',
  }

  const rows = Object.entries(fields)
    .map(([key, val]) => fieldRow(key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()), val))
    .join('\n')

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>${formTitles[formType]}</title></head>
<body style="font-family:Inter,sans-serif;background:#F5F5F5;padding:40px 20px;margin:0;">
  <div style="max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:#0F0F0F;padding:32px 40px;">
      <h1 style="color:#C6A43F;font-size:24px;margin:0;letter-spacing:0.05em;">ZEVRIAN</h1>
      <p style="color:#9CA3AF;margin:8px 0 0;font-size:14px;">New form submission</p>
    </div>
    <div style="padding:32px 40px;">
      <h2 style="font-size:18px;color:#0F0F0F;margin:0 0 24px;">${formTitles[formType]}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        ${rows}
      </table>
      <hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0;">
      <p style="font-size:12px;color:#9CA3AF;margin:0;">
        Submitted at: ${submittedAt} &nbsp;|&nbsp; IP: ${ipAddress}
      </p>
    </div>
  </div>
</body>
</html>`
}

export function buildEmailText(ctx: EmailTemplateContext): string {
  const { formType, fields, submittedAt, ipAddress } = ctx
  const lines = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  return `ZEVRIAN — New ${formType} submission\n\n${lines}\n\nSubmitted: ${submittedAt}\nIP: ${ipAddress}`
}
