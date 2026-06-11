'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { heroVariant, resolveVariant } from '@/lib/animations'
import { Button } from '@/components/ui/button'

interface HeroProps {
  headline: string
  subheading: string
  cta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
}

export function Hero({ headline, subheading, cta, secondaryCta }: HeroProps) {
  const shouldReduce = useReducedMotion()
  const variant = resolveVariant(shouldReduce, heroVariant)

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-charcoal dark:bg-charcoal">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-50 to-charcoal opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(198,164,63,0.12)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          variants={variant}
          initial="hidden"
          animate="visible"
          className="text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
        >
          {headline}
        </motion.h1>

        <motion.p
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {subheading}
        </motion.p>

        {(cta || secondaryCta) && (
          <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {cta && (
              <Button asChild size="lg" className="px-8 py-3 text-base font-semibold">
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 text-base font-semibold border-white/30 text-white hover:bg-white/10"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
