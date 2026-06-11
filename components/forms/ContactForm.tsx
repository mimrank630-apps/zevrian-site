'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { GeneralInquirySchema, type GeneralInquiryData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GeneralInquiryData>({
    resolver: zodResolver(GeneralInquirySchema),
    defaultValues: { formType: 'general' },
  })

  async function onSubmit(data: GeneralInquiryData) {
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.ok) {
        setState('success')
        reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
        <p className="text-base font-semibold text-[--text-primary] mb-1">Message received!</p>
        <p className="text-sm text-[--text-muted]">We&apos;ll be in touch within 2 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <input type="hidden" {...register('formType')} />

      <div className="space-y-1.5">
        <Label htmlFor="contact-name">Full Name <span aria-hidden="true" className="text-red-500">*</span></Label>
        <Input
          id="contact-name"
          placeholder="Jane Smith"
          disabled={state === 'submitting'}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          {...register('name')}
        />
        {errors.name && <p id="contact-name-error" className="text-xs text-red-500">{errors.name.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-email">Email Address <span aria-hidden="true" className="text-red-500">*</span></Label>
        <Input
          id="contact-email"
          type="email"
          placeholder="jane@company.com"
          disabled={state === 'submitting'}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          {...register('email')}
        />
        {errors.email && <p id="contact-email-error" className="text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-subject">Subject <span aria-hidden="true" className="text-red-500">*</span></Label>
        <Input
          id="contact-subject"
          placeholder="What is this regarding?"
          disabled={state === 'submitting'}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          {...register('subject')}
        />
        {errors.subject && <p id="contact-subject-error" className="text-xs text-red-500">{errors.subject.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-message">Message <span aria-hidden="true" className="text-red-500">*</span></Label>
        <Textarea
          id="contact-message"
          placeholder="Tell us how we can help…"
          rows={5}
          disabled={state === 'submitting'}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          {...register('message')}
        />
        {errors.message && <p id="contact-message-error" className="text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-500">
          Something went wrong. Please retry or email us at{' '}
          <a href="mailto:hello@zevriangloba.com" className="underline">hello@zevriangloba.com</a>.
        </p>
      )}

      <Button type="submit" disabled={state === 'submitting'} className="w-full sm:w-auto" aria-label="Send message">
        {state === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
