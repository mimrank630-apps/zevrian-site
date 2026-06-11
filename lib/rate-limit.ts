/**
 * In-memory sliding-window rate limiter.
 * Keyed by IP address; allows max 10 requests per 60-minute window.
 *
 * For multi-instance production deployments, replace with
 * a Redis-backed implementation (e.g. @upstash/ratelimit).
 */

const store = new Map<string, number[]>()

const WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 10

export function checkRateLimit(ip: string): { limited: boolean } {
  const now = Date.now()
  const timestamps = store.get(ip) ?? []

  // Prune entries outside the sliding window
  const recent = timestamps.filter((t) => now - t < WINDOW_MS)

  if (recent.length >= MAX_REQUESTS) {
    return { limited: true }
  }

  store.set(ip, [...recent, now])
  return { limited: false }
}

/** Reset the store — useful for testing */
export function resetRateLimitStore(): void {
  store.clear()
}
