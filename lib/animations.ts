import type { Variants } from 'framer-motion'

/** Section heading: fade up 24px, 600ms easeOut */
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/** Full-width section block: fade up 40px, 700ms easeOut */
export const fadeUpSectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

/** Hero headline: fade up 32px, 800ms easeOut */
export const heroVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

/** Stagger container: 100ms between children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

/** Individual card in a staggered grid: fade up 24px, 500ms easeOut */
export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/**
 * Returns no-op variants when prefers-reduced-motion is active.
 * Pass the result of `useReducedMotion()` from framer-motion.
 */
export function resolveVariant(
  shouldReduce: boolean | null,
  variant: Variants
): Variants {
  if (shouldReduce) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    }
  }
  return variant
}
