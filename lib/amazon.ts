/**
 * Central Amazon store configuration.
 * When AMAZON_STORE_URL is not set, hasAmazonStore is false and
 * all Amazon-facing UI shows "Coming to Amazon Soon" instead.
 */
export const AMAZON_STORE_URL: string | null =
  process.env.AMAZON_STORE_URL ?? null

export const hasAmazonStore = Boolean(AMAZON_STORE_URL)
