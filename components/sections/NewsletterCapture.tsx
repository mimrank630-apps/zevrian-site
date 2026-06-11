'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterSchema, type NewsletterData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface NewsletterCaptureProps {
  compact?: boolean
  className?: string
}

type FormState = 'idle' | 'submitting' | 'success' | 'error' | 'already_subscribed'

export function NewsletterCapture({ compact = false, className }: NewsletterCaptureProps) {
  const [state, setState] = useState<FormState>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterData>({
    resolver: zodResolver(NewsletterSchema),
  })

  async function onSubmit(data: NewsletterData) {
    setState('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.status === 'already_subscribed') {
        setState('already_subscribed')
      } else if (json.status === 'subscribed') {
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
      <p className="text-sm text-gold font-medium">Thank you for subscribing!</p>
    )
  }

  if (state === 'already_subscribed') {
    return (
      <p className="text-sm text-gray-400">You&apos;re already subscribed.</p>
    )
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('flex gap-2', compact ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row max-w-md')}
        noValidate
      >
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            className={cn(
              'bg-white/10 border-white/20 text-white placeholder:text-gray-500',
              errors.email && 'border-red-500'
            )}
            disabled={state === 'submitting'}
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <Button
          type="submit"
          size={compact ? 'sm' : 'default'}
          disabled={state === 'submitting'}
          aria-label="Subscribe to newsletter"
        >
          {state === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </Button>
      </form>
      {!compact && (
        <p className="mt-2 text-xs text-gray-500">
          Zevrian Global LLC will never share your email address with third parties.
        </p>
      )}
      {state === 'error' && (
        <p className="mt-2 text-xs text-red-400">
          Something went wrong. Please try again or email us at{' '}
          <a href="mailto:info@zevrian.com" className="underline">
            info@zevrian.com
          </a>
          .
        </p>
      )}
    </div>
  )
}
