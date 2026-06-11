import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-charcoal">
      <p className="text-4xl sm:text-6xl font-extrabold tracking-[0.12em] bg-gradient-to-r from-gold to-gold-hover bg-clip-text text-transparent mb-6">
        ZEVRIAN
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
        Page not found
      </h1>
      <p className="text-gray-400 text-base mb-10 text-center max-w-sm">
        The page you are looking for does not exist or has been moved. Let&apos;s get you back on track.
      </p>
      <Button asChild size="lg">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}
