'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUpVariant, resolveVariant } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  gold?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  gold = false,
  className,
}: SectionHeadingProps) {
  const shouldReduce = useReducedMotion()
  const variant = resolveVariant(shouldReduce, fadeUpVariant)

  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      <motion.h2
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className={cn(
          'text-[1.875rem] sm:text-[2.25rem] lg:text-[3rem] font-bold tracking-tight leading-tight',
          gold
            ? 'bg-gradient-to-r from-gold to-gold-hover bg-clip-text text-transparent'
            : 'text-[--text-primary]'
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base sm:text-lg text-[--text-muted] max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
