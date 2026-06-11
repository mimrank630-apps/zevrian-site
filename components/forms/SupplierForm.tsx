'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SupplierInquirySchema, type SupplierInquiryData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function SupplierForm() {
  const [state, setState] = useState<FormState>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SupplierInquiryData>({
    resolver: zodResolver(SupplierInquirySchema),
    defaultValues: { formType: 'supplier' },
  })

  async function onSubmit(data: SupplierInquiryData) {
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
        <p className="text-base font-semibold text-[--text-primary] mb-1">Inquiry received!</p>
        <p className="text-sm text-[--text-muted]">Our procurement team will review your submission and be in touch shortly.</p>
      </div>
    )
  }

  const field = (id: string, label: string, placeholder: string, type = 'text', key: keyof SupplierInquiryData) => (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label} <span aria-hidden="true" className="text-red-500">*</span></Label>
      <Input id={id} type={type} placeholder={placeholder} disabled={state === 'submitting'}
        aria-describedby={errors[key] ? `${id}-error` : undefined} {...register(key)} />
      {errors[key] && <p id={`${id}-error`} className="text-xs text-red-500">{errors[key]?.message as string}</p>}
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <input type="hidden" {...register('formType')} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field('supplier-name', 'Full Name', 'Jane Smith', 'text', 'name')}
        {field('supplier-company', 'Company Name', 'Acme Manufacturing Co.', 'text', 'company')}
      </div>
      {field('supplier-website', 'Company Website', 'https://example.com', 'url', 'website')}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field('supplier-country', 'Country of Operation', 'United States', 'text', 'country')}
        {field('supplier-moq', 'Minimum Order Quantity', 'e.g. 500 units', 'text', 'moq')}
      </div>
      {field('supplier-categories', 'Product Categories', 'e.g. Home & Kitchen, Storage Solutions', 'text', 'productCategories')}
      <div className="space-y-1.5">
        <Label htmlFor="supplier-message">Message <span aria-hidden="true" className="text-red-500">*</span></Label>
        <Textarea id="supplier-message" placeholder="Tell us about your products and manufacturing capabilities…" rows={5}
          disabled={state === 'submitting'} {...register('message')} />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>
      {state === 'error' && (
        <p className="text-sm text-red-500">
          Something went wrong. Please retry or email <a href="mailto:info@zevrian.com" className="underline">info@zevrian.com</a>.
        </p>
      )}
      <Button type="submit" disabled={state === 'submitting'} className="w-full sm:w-auto" aria-label="Submit supplier inquiry">
        {state === 'submitting' ? 'Sending…' : 'Submit Inquiry'}
      </Button>
    </form>
  )
}
