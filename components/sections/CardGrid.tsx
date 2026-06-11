'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, cardVariant, resolveVariant } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface CardGridProps {
  children: React.ReactNode
  className?: string
  cols?: 2 | 3 | 4
}

export function CardGrid({ children, className, cols = 4 }: CardGridProps) {
  const shouldReduce = useReducedMotion()
  const container = resolveVariant(shouldReduce, staggerContainer)
  const item = resolveVariant(shouldReduce, cardVariant)

  const colClass =
    cols === 2
      ? 'sm:grid-cols-2'
      : cols === 3
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn('grid grid-cols-1 gap-6', colClass, className)}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
