import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY

if (!apiKey && process.env.NODE_ENV === 'production') {
  throw new Error('RESEND_API_KEY environment variable is not set')
}

export const resendClient = new Resend(apiKey ?? 'placeholder')
