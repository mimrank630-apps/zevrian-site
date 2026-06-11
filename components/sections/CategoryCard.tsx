'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  icon: React.ReactNode
  name: string
  description: string
  amazonUrl?: string | null
  className?: string
}

export function CategoryCard({ icon, name, description, amazonUrl, className }: CategoryCardProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      whileHover={shouldReduce || !amazonUrl ? {} : { y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.25 }}
      className={cn(
        'group rounded-xl border border-border bg-surface-light dark:bg-charcoal-50 p-6 flex flex-col gap-4 transition-colors',
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0" aria-hidden="true">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-base font-semibold text-[--text-primary] mb-2">{name}</h3>
        <p className="text-sm text-[--text-muted] leading-relaxed">{description}</p>
      </div>
      {amazonUrl ? (
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Shop ${name} on Amazon`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-hover transition-colors mt-auto"
        >
          Shop on Amazon
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[--text-muted] mt-auto uppercase tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse" aria-hidden="true" />
          Coming to Amazon Soon
        </span>
      )}
    </motion.div>
  )
}
