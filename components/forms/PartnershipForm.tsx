'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PartnershipSchema, type PartnershipData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function PartnershipForm() {
  const [state, setState] = useState<FormState>('idle')
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<PartnershipData>({
    resolver: zodResolver(PartnershipSchema),
    defaultValues: { formType: 'partnership' },
  })

  async function onSubmit(data: PartnershipData) {
    setState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.ok) { setState('success'); reset() } else { setState('error') }
    } catch { setState('error') }
  }

  if (state === 'success') {
    return (
      <div className="rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
        <p className="text-base font-semibold text-[--text-primary] mb-1">Partnership request received!</p>
        <p className="text-sm text-[--text-muted]">We&apos;ll review your request and reach out within 3–5 business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <input type="hidden" {...register('formType')} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="partner-name">Full Name <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input id="partner-name" placeholder="Jane Smith" disabled={state === 'submitting'} {...register('name')} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="partner-org">Organisation Name <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input id="partner-org" placeholder="Acme Corp" disabled={state === 'submitting'} {...register('organisation')} />
          {errors.organisation && <p className="text-xs text-red-500">{errors.organisation.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="partner-type">Partnership Type <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Controller
            name="partnershipType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value} disabled={state === 'submitting'}>
                <SelectTrigger id="partner-type" aria-label="Partnership type">
                  <SelectValue placeholder="Select type…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Wholesale">Wholesale</SelectItem>
                  <SelectItem value="Distribution">Distribution</SelectItem>
                  <SelectItem value="Co-branding">Co-branding</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.partnershipType && <p className="text-xs text-red-500">{errors.partnershipType.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="partner-country">Country <span aria-hidden="true" className="text-red-500">*</span></Label>
          <Input id="partner-country" placeholder="United States" disabled={state === 'submitting'} {...register('country')} />
          {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="partner-message">Message <span aria-hidden="true" className="text-red-500">*</span></Label>
        <Textarea id="partner-message" placeholder="Tell us about the partnership opportunity…" rows={5} disabled={state === 'submitting'} {...register('message')} />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-500">
          Something went wrong. Please retry or email <a href="mailto:info@zevrian.com" className="underline">info@zevrian.com</a>.
        </p>
      )}

      <Button type="submit" disabled={state === 'submitting'} className="w-full sm:w-auto" aria-label="Submit partnership request">
        {state === 'submitting' ? 'Sending…' : 'Submit Request'}
      </Button>
    </form>
  )
}
