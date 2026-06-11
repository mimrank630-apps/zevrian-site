# Design Document — Zevrian Global LLC Corporate Website

## Overview

This document describes the technical architecture for the complete rebuild of the Zevrian Global LLC web presence as a Next.js (App Router, latest) application. The existing site is a static HTML/CSS/JS prototype (`/projects/sandbox/zevrian-site/`); this design replaces it entirely with a server-rendered, TypeScript-first, React application. The new site is a multi-page corporate and brand website — not an e-commerce store. There is no cart, no checkout, and no product-level purchasing; all purchasing intent routes externally to the Zevrian Direct Amazon store.

**Tech stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · next-themes · Resend (email delivery) · next-sitemap

---

## Architecture

### High-Level Architecture

```
Browser
  └── Next.js App Router (SSR + RSC)
        ├── Root Layout (Nav, Footer, CookieConsent, ThemeProvider)
        ├── Page Segments (11 routes)
        ├── API Routes (/api/contact, /api/newsletter)
        └── Static Assets (/public/Zevrian-Global-Company-Profile.pdf)
```

The application uses the **React Server Components (RSC)** model. All page shells render on the server; animation wrappers (`"use client"`) are co-located leaf components, keeping the server/client boundary as tight as possible. API routes (contact forms, newsletter) are Next.js Route Handlers (`app/api/**/route.ts`).

### Migration from Static Site

| Static Site Pattern | Next.js App Router Replacement |
|---|---|
| `index.html` in each folder | `app/(route)/page.tsx` per segment |
| `<link>` stylesheet | Tailwind CSS utility classes + `globals.css` |
| `fonts.googleapis.com` import | `next/font/google` (Inter) |
| Vanilla JS cart (`cart.js`) | **Removed** — no cart exists |
| `<a href="">` navigation | `next/link` (`<Link>`) for client transitions |
| Static `<img>` tags | `next/image` (`<Image>`) for optimised delivery |
| Manual `<meta>` tags | `generateMetadata` per page |
| `sitemap.xml` (manual) | `next-sitemap` post-build generation |

---

## Directory Structure

```
app/
├── layout.tsx                    # Root layout: ThemeProvider, Nav, Footer, CookieConsent
├── globals.css                   # Tailwind base/components/utilities + CSS custom properties
├── page.tsx                      # Home (/)
├── about/
│   └── page.tsx                  # /about
├── brand/
│   └── page.tsx                  # /brand
├── products/
│   └── page.tsx                  # /products
├── amazon-excellence/
│   └── page.tsx                  # /amazon-excellence
├── suppliers/
│   └── page.tsx                  # /suppliers
├── quality/
│   └── page.tsx                  # /quality
├── vision/
│   └── page.tsx                  # /vision
├── contact/
│   └── page.tsx                  # /contact
├── privacy-policy/
│   └── page.tsx                  # /privacy-policy
├── terms-of-service/
│   └── page.tsx                  # /terms-of-service
├── not-found.tsx                 # Custom 404 page
└── api/
    ├── contact/
    │   └── route.ts              # POST /api/contact (Resend delivery + rate limit)
    └── newsletter/
        └── route.ts              # POST /api/newsletter (Resend audience + duplicate check)

components/
├── layout/
│   ├── Navbar.tsx                # "use client" — glassmorphism, mega menu, mobile menu
│   ├── Footer.tsx                # Server component — links, copyright, newsletter prompt
│   └── CookieConsent.tsx         # "use client" — localStorage persistence
├── ui/                           # shadcn/ui primitives (Button, Input, Select, Accordion…)
├── sections/
│   ├── Hero.tsx                  # "use client" — Framer Motion hero animations
│   ├── SectionHeading.tsx        # "use client" — whileInView heading animation
│   ├── CardGrid.tsx              # "use client" — staggered card grid animation
│   ├── NewsletterCapture.tsx     # "use client" — newsletter form with validation
│   ├── CategoryCard.tsx          # "use client" — product category card with hover
│   └── FaqAccordion.tsx          # shadcn/ui Accordion wrapper
├── forms/
│   ├── ContactForm.tsx           # "use client" — General Business Inquiry form
│   ├── SupplierForm.tsx          # "use client" — Supplier Inquiry / Supplier Contact form
│   └── PartnershipForm.tsx       # "use client" — Partnership Request / Partnership Interest form
└── seo/
    └── JsonLd.tsx                # Server component — injects JSON-LD <script> tags

lib/
├── fonts.ts                      # next/font Inter config export
├── metadata.ts                   # Shared generateMetadata helpers and base metadata
├── resend.ts                     # Resend client singleton
├── rate-limit.ts                 # In-memory IP rate limiter (10 req/IP/hour)
├── email-templates.ts            # Plain-text and HTML email body builders
└── validations.ts                # Zod schemas for all Live Form payloads

public/
├── Zevrian-Global-Company-Profile.pdf
├── og/                           # Open Graph images per page (1200×630 PNG)
└── favicon.svg

tailwind.config.ts
next.config.ts
next-sitemap.config.js
tsconfig.json
```

---

## Design System

### Colour Tokens

Defined in `tailwind.config.ts` as custom theme extensions and as CSS custom properties in `globals.css`:

```typescript
// tailwind.config.ts — theme.extend.colors
const colors = {
  charcoal: {
    DEFAULT: '#0F0F0F',
    50: '#1A1A1A',
    100: '#0F0F0F',
  },
  gold: {
    DEFAULT: '#C6A43F',
    muted: 'rgba(198,164,63,0.20)',    // nav border in glassmorphism
    hover: '#D4B54D',
  },
  surface: {
    light: '#F5F5F5',
    white: '#FFFFFF',
  },
}
```

```css
/* globals.css — CSS custom properties for dark/light switching via next-themes */
:root {
  --bg-primary:   #FFFFFF;
  --bg-surface:   #F5F5F5;
  --text-primary: #0F0F0F;
  --text-muted:   #6B7280;
  --border:       #E5E7EB;
}
.dark {
  --bg-primary:   #0F0F0F;
  --bg-surface:   #1A1A1A;
  --text-primary: #F5F5F5;
  --text-muted:   #9CA3AF;
  --border:       #2A2A2A;
}
```

### Typography

Font loaded once in the root layout via `lib/fonts.ts`:

```typescript
// lib/fonts.ts
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

Tailwind type scale (`tailwind.config.ts` `fontSize` extension):

| Token | Size | Usage |
|---|---|---|
| `text-body` | 1rem (16px) | Body copy |
| `text-sm-heading` | 1.25rem | Card labels, sub-headings |
| `text-md-heading` | 1.5rem | Section sub-titles |
| `text-lg-heading` | 1.875rem | Section titles (mobile) |
| `text-xl-heading` | 2.25rem | Hero sub-title, section titles (desktop) |
| `text-2xl-heading` | 3rem | Hero headline (desktop) |
| `text-3xl-heading` | 3.75rem | Brand wordmark, Home hero |

### shadcn/ui Component Overrides

All shadcn/ui primitives (`Button`, `Input`, `Select`, `Accordion`, `Badge`, `Card`) have their base `cn()` variants extended in `components/ui/` to apply:
- Primary action: `bg-gold text-charcoal hover:bg-gold-hover`
- Surface card: `bg-surface-light dark:bg-surface rounded-xl border border-border`
- Input focus ring: `ring-gold/50`
- Border radius: `rounded-xl` (cards), `rounded-lg` (inputs/buttons)

---

## Component Architecture

### Root Layout (`app/layout.tsx`)

Server component wrapper. Mounts once; shared across all page transitions.

```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="zevrian_theme">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

`suppressHydrationWarning` is required when using `next-themes` class strategy to prevent React hydration mismatch on the `<html>` element.

### ThemeProvider

`next-themes` `ThemeProvider` wraps the root layout. Configuration:

| Prop | Value | Rationale |
|---|---|---|
| `attribute` | `"class"` | Adds `dark` class to `<html>` |
| `defaultTheme` | `"system"` | Respects OS `prefers-color-scheme` |
| `enableSystem` | `true` | Auto-switches before explicit user choice |
| `storageKey` | `"zevrian_theme"` | Named key in localStorage |

The theme toggle button in `Navbar.tsx` calls `setTheme('dark' | 'light')` from `useTheme()`. It conditionally renders a sun icon or moon icon and sets `aria-label` to `"Switch to light mode"` or `"Switch to dark mode"` respectively.

### Navbar (`components/layout/Navbar.tsx`) — `"use client"`

State managed locally:
- `scrolled: boolean` — tracks whether page has scrolled > 10px (enables glassmorphism)
- `mobileOpen: boolean` — controls slide-in mobile menu visibility
- `megaMenuOpen: boolean` — controls "Our Company" dropdown

```
Navbar
├── Logo (Link → /)
├── DesktopNav (hidden lg:flex)
│   ├── NavLink × n  (direct routes: Products, Suppliers, Contact)
│   └── MegaMenuTrigger "Our Company"
│       └── MegaMenuPanel (absolute positioned, glassmorphism card)
│           ├── /about — About
│           ├── /brand — Brand
│           ├── /amazon-excellence — Amazon Excellence
│           ├── /quality — Quality Assurance
│           └── /vision — Future Vision
├── ThemeToggle button (always visible)
└── HamburgerButton (visible below lg)
    └── MobileMenuOverlay (fixed full-height, slide-in from right)
        └── NavLinks (all pages, stacked vertically)
```

**Glassmorphism effect** — applied as conditional Tailwind classes when `scrolled === true`:
```
backdrop-blur-md bg-white/80 dark:bg-charcoal/80 border-b border-gold-muted
```

Active link detection uses Next.js `usePathname()` and compares to each href.

### Footer (`components/layout/Footer.tsx`) — Server Component

```
Footer
├── ZEVRIAN wordmark
├── Newsletter subscribe prompt (NewsletterCapture micro variant)
├── Nav links grid: all 11 routes
├── Legal links: Privacy Policy, Terms of Service
├── Company info: Sheridan, Wyoming, USA
├── Contact email
└── Copyright: © [current year] Zevrian Global LLC. All rights reserved.
```

Year is generated server-side: `new Date().getFullYear()`.

### CookieConsent (`components/layout/CookieConsent.tsx`) — `"use client"`

Reads `localStorage.getItem('zevrian_cookie_consent')` on mount. If absent, renders a fixed bottom banner:

```
CookieConsentBanner (fixed bottom-0, z-50, glassmorphism)
├── Description text
├── "Accept All" button → sets localStorage['zevrian_cookie_consent'] = 'accepted'
└── "Decline" button    → sets localStorage['zevrian_cookie_consent'] = 'declined'
```

Once either button is clicked, the component sets state to hide and does not re-render the banner on subsequent loads. Non-essential analytics scripts are conditionally loaded only when consent is `'accepted'`.

---

## Animation System

All animations live in `"use client"` leaf components. Page-level RSC wrappers remain server components.

### Shared Animation Variants

```typescript
// lib/animations.ts

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeUpSectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export const heroVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
```

### `prefers-reduced-motion` Handling

All animated components read the `useReducedMotion()` hook from Framer Motion:

```typescript
const shouldReduceMotion = useReducedMotion()

const resolvedVariant = shouldReduceMotion
  ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
  : fadeUpVariant
```

When `shouldReduceMotion` is `true`, elements render directly in their final visible state; no transform or opacity transition is applied.

### `SectionHeading` Component

```typescript
// components/sections/SectionHeading.tsx — "use client"
<motion.h2
  variants={fadeUpVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-10%' }}
>
  {children}
</motion.h2>
```

### `CardGrid` Component

```typescript
// components/sections/CardGrid.tsx — "use client"
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={cardVariant}>
      {renderItem(item)}
    </motion.div>
  ))}
</motion.div>
```

### Hero Component

```typescript
// components/sections/Hero.tsx — "use client"
<motion.h1 variants={heroVariant} initial="hidden" animate="visible">
  {headline}
</motion.h1>
<motion.p
  variants={heroVariant}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.2 }}
>
  {subheading}
</motion.p>
```

Note: The hero fires on `animate` (mount), not `whileInView`, since it is always above the fold on load.

---

## Page Architecture

### Shared Page Structure

Each page exports a `generateMetadata` function and a default page component (RSC). Client interactivity is delegated to co-located `"use client"` section components.

```typescript
// Template for every page
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Page Name] | ZEVRIAN — Premium Essentials for Modern Life',
  description: '…120–160 char unique description…',
  openGraph: {
    title: '…',
    description: '…',
    url: 'https://zevriangloba.com/[route]',
    type: 'website',
    images: [{ url: '/og/[page].png', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://zevriangloba.com/[route]' },
}
```

### Home Page (`/`)

Sections rendered in order:
1. `<Hero>` — tagline, descriptor, "Explore Products" CTA → `/products`
2. `<BrandIntroduction>` — fade-up section block
3. `<MissionStatement>` — centered text block
4. `<ProductFocusAreas>` — `<CardGrid>` of 4 category tiles (Home & Kitchen, Office & Workspace, Household Essentials, Lifestyle Products) — presentational only, no purchase action
5. `<TrustPillars>` — min 3 pillars (quality sourcing, FBA fulfilment, customer focus) as icon-row layout
6. `<AmazonExcellenceTeaser>` — introduction + "Discover Zevrian Direct" CTA → `/amazon-excellence`
7. `<NewsletterCapture>` — email input + "Subscribe" + privacy note
8. `<Footer>` (from root layout)

JSON-LD: `Organization` schema injected via `<JsonLd>` server component in `<head>`:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zevrian Global LLC",
  "url": "https://zevriangloba.com",
  "logo": "https://zevriangloba.com/og/logo.png",
  "address": { "@type": "PostalAddress", "addressLocality": "Sheridan", "addressRegion": "WY", "addressCountry": "US" },
  "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "email": "contact@zevriangloba.com" },
  "sameAs": ["https://www.amazon.com/stores/ZEVRIAN"]
}
```

### About Page (`/about`)

Sections: Company Origin Story · Vision Statement · Mission Statement · Core Values · Leadership Philosophy · Growth Roadmap.

Growth Roadmap rendered as a horizontal (desktop) / vertical (mobile) step-indicator:
```
[1] Amazon FBA Wholesale → [2] Private Label Launch → [3] Multi-Brand Expansion → [4] Global Distribution
```

Download button: `<a href="/Zevrian-Global-Company-Profile.pdf" download="Zevrian-Global-Company-Profile.pdf" target="_blank" rel="noopener noreferrer">`

### Brand Page (`/brand`)

Hero treatment: ZEVRIAN wordmark rendered at `text-[4rem] lg:text-[6rem]` with Gold Accent gradient.
Sections: Brand Showcase · Brand Philosophy (min 3 thematic paragraphs) · Multi-Brand Future.

### Product Categories Page (`/products`)

Renders exactly 4 `<CategoryCard>` components. Each card is a self-contained presentational component:

```typescript
interface CategoryCardProps {
  icon: React.ReactNode      // SVG icon
  name: string               // Category name
  description: string        // Max 2 sentences
  amazonUrl: string          // Zevrian Direct Amazon store URL
}
```

Hover animation applied via Framer Motion `whileHover`:
```typescript
<motion.div whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} transition={{ duration: 0.25 }}>
```

JSON-LD `ItemList` injected via `<JsonLd>`:
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ZEVRIAN Product Categories",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home & Kitchen" },
    { "@type": "ListItem", "position": 2, "name": "Office & Workspace" },
    { "@type": "ListItem", "position": 3, "name": "Household Essentials" },
    { "@type": "ListItem", "position": 4, "name": "Lifestyle Products" }
  ]
}
```

### Amazon Excellence Page (`/amazon-excellence`)

Sections: Zevrian Direct Model · FBA Infrastructure · Quality Control in Pipeline · Customer Advantages.

`<FaqAccordion>` renders min 4 Q&As using shadcn/ui `Accordion` component.

CTA: `<Button asChild><a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">Visit Zevrian Direct on Amazon</a></Button>`

### Suppliers & Partnerships Page (`/suppliers`)

Three informational sections: Supplier Inquiry · Wholesale Partnership · Distribution Opportunities.

Two Live Forms:
- `<SupplierForm>` — Full Name, Company Name, Website (URL), Country, Product Categories (multi-select), MOQ, Message
- `<PartnershipForm>` — Full Name, Organisation, Partnership Type (dropdown: Wholesale / Distribution / Co-branding / Other), Country, Message

Both submit to `POST /api/contact` with a `formType` discriminator field.

Download button for Company Profile PDF (same as About page).

### Quality Assurance Page (`/quality`)

Sections: Sourcing Standards · Supplier Vetting Process · Inspection Procedures · Regulatory Compliance Approach.

`<FaqAccordion>` with min 3 Q&As.

### Future Vision Page (`/vision`)

Sections: Global Expansion Roadmap (aspirational, labelled "Targeted" / "Planned") · Multi-Brand Ecosystem · Private Label Scaling.

All milestone language uses "planned", "targeted", or "projected" to distinguish from current operational status.

### Contact Page (`/contact`)

Three tabbed or stacked `<Tabs>` (shadcn/ui) or distinct labelled form sections:
- General Business Inquiry: Full Name, Email, Subject, Message
- Supplier Contact: Full Name, Company, Email, Country, Message
- Partnership Request: Full Name, Organisation, Email, Partnership Type (dropdown), Message

Static block: Sheridan, Wyoming, USA · contact email address.

### Privacy Policy Page (`/privacy-policy`)

Static content page. Sections: Introduction · Data Collection · Use of Data · Cookies · Third-Party Services · Data Retention · User Rights · Contact Information.

Header includes revision date in ISO 8601 format (e.g., `2025-01-15`).

### Terms of Service Page (`/terms-of-service`)

Static content page. Sections: Acceptance of Terms · Intellectual Property · Limitation of Liability · External Links · Governing Law (Wyoming, USA) · Contact Information.

Includes Amazon disclaimer: purchases on the Zevrian Direct store are subject to Amazon's own terms.

### Custom 404 Page (`app/not-found.tsx`)

Branded error message with ZEVRIAN wordmark, "Page not found" text, and "Back to Home" `<Link>`.

---

## API Routes

### `POST /api/contact` — Form Email Delivery

**File:** `app/api/contact/route.ts`

**Request body (union by `formType`):**

```typescript
// lib/validations.ts — Zod schemas

const GeneralInquirySchema = z.object({
  formType: z.literal('general'),
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
})

const SupplierInquirySchema = z.object({
  formType: z.literal('supplier'),
  name: z.string().min(1),
  company: z.string().min(1),
  website: z.string().url(),
  country: z.string().min(1),
  productCategories: z.string().min(1),
  moq: z.string().min(1),
  message: z.string().min(10),
})

const PartnershipSchema = z.object({
  formType: z.literal('partnership'),
  name: z.string().min(1),
  organisation: z.string().min(1),
  partnershipType: z.enum(['Wholesale', 'Distribution', 'Co-branding', 'Other']),
  country: z.string().min(1),
  message: z.string().min(10),
})

export const ContactFormSchema = z.discriminatedUnion('formType', [
  GeneralInquirySchema,
  SupplierInquirySchema,
  PartnershipSchema,
])
```

**Handler flow:**

```
POST /api/contact
 1. Extract IP from headers (X-Forwarded-For or request.ip)
 2. Check rate limit (lib/rate-limit.ts) → 429 if exceeded
 3. Parse + validate body with ContactFormSchema → 400 with field errors if invalid
 4. Build email HTML via lib/email-templates.ts
 5. Send via Resend client (lib/resend.ts) to CONTACT_EMAIL_TO env var
 6. On success → 200 { ok: true }
 7. On Resend error → log server-side → 500 { error: 'delivery_failed' }
```

**Response types:**

```typescript
type SuccessResponse = { ok: true }
type ValidationError = { ok: false; errors: Record<string, string> }  // 400
type RateLimitError  = { ok: false; error: 'rate_limited' }           // 429
type ServerError     = { ok: false; error: 'delivery_failed' }        // 500
```

### `POST /api/newsletter` — Newsletter Subscription

**File:** `app/api/newsletter/route.ts`

```typescript
const NewsletterSchema = z.object({
  email: z.string().email(),
})
```

**Handler flow:**

```
POST /api/newsletter
 1. Validate body with NewsletterSchema → 400 if invalid
 2. Call Resend Audiences API to add contact to audience list
 3. If Resend returns "contact already exists" → 200 { status: 'already_subscribed' }
 4. On success → 200 { status: 'subscribed' }
 5. On error → 500 { error: 'subscription_failed' }
```

### Rate Limiter (`lib/rate-limit.ts`)

In-memory sliding-window rate limiter using a `Map<string, number[]>` keyed by IP address. Each entry holds an array of request timestamps. On each request, entries older than 1 hour are pruned; if the remaining count is ≥ 10, the request is rejected with `{ limited: true }`.

```typescript
export function checkRateLimit(ip: string): { limited: boolean } {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000  // 1 hour
  const limit = 10

  const timestamps = store.get(ip) ?? []
  const recent = timestamps.filter((t) => now - t < windowMs)

  if (recent.length >= limit) return { limited: true }

  store.set(ip, [...recent, now])
  return { limited: false }
}
```

> **Note:** For production multi-instance deployments, replace with Redis-backed rate limiting (e.g., `@upstash/ratelimit`).

---

## Form Architecture

### Client-Side Validation Pattern

All Live Forms use `react-hook-form` with Zod resolver (`@hookform/resolvers/zod`) against the same Zod schemas defined in `lib/validations.ts`. This ensures the client and server share a single source of validation truth.

```typescript
// Example: ContactForm.tsx
const form = useForm<z.infer<typeof GeneralInquirySchema>>({
  resolver: zodResolver(GeneralInquirySchema),
  defaultValues: { formType: 'general', name: '', email: '', subject: '', message: '' },
})
```

Field-level errors are displayed inline beneath each input using shadcn/ui `FormMessage`.

### Form State Machine

Each form cycles through four states:

```
idle → submitting → success
              ↘ error → idle  (retry via dismissible error banner)
```

`submitting` state disables the submit button and shows a loading spinner. `success` state replaces the form with a confirmation message. `error` state shows an inline error with a "retry" prompt and the company email address.

---

## SEO & Metadata

### Metadata Helper (`lib/metadata.ts`)

```typescript
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://zevriangloba.com'),
  openGraph: { siteName: 'ZEVRIAN', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}
```

Each page calls `generateMetadata()` or exports a static `metadata` object that spreads `baseMetadata` and overrides `title`, `description`, `openGraph`, and `alternates.canonical`.

### Page Title Format

All page titles follow: `[Page Name] | ZEVRIAN — Premium Essentials for Modern Life`  
Maximum 70 characters enforced during content authoring.

### Sitemap Generation

`next-sitemap.config.js` post-build configuration:

```javascript
module.exports = {
  siteUrl: 'https://zevriangloba.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://zevriangloba.com/sitemap.xml'],
  },
}
```

All 11 routes listed with `changefreq: 'monthly'` and `priority` values (home: 1.0, product/contact: 0.9, rest: 0.7).

---

## Data Models

### Category Card Data

```typescript
interface CategoryItem {
  id: string
  name: string
  description: string             // max 2 sentences
  icon: LucideIcon | React.FC    // from lucide-react
  amazonUrl: string               // Zevrian Direct store URL
}

const PRODUCT_CATEGORIES: CategoryItem[] = [
  { id: 'home-kitchen',          name: 'Home & Kitchen',        … },
  { id: 'office-workspace',      name: 'Office & Workspace',    … },
  { id: 'household-essentials',  name: 'Household Essentials',  … },
  { id: 'lifestyle-products',    name: 'Lifestyle Products',    … },
]
```

### FAQ Item

```typescript
interface FaqItem {
  id: string
  question: string
  answer: string
}
```

### Trust Pillar

```typescript
interface TrustPillar {
  id: string
  icon: LucideIcon
  title: string
  body: string   // real operational strength, no fabricated statistics
}
```

### Email Template Context

```typescript
interface EmailTemplateContext {
  formType: 'general' | 'supplier' | 'partnership'
  fields: Record<string, string>
  submittedAt: string          // ISO 8601
  ipAddress: string
}
```

---

## Environment Variables

```bash
# .env.local (never committed)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=hello@zevriangloba.com
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://zevriangloba.com
AMAZON_STORE_URL=https://www.amazon.com/stores/ZEVRIAN
```

---

## Error Handling

| Layer | Error Type | Handling |
|---|---|---|
| Form client | Missing required field | Inline field error via react-hook-form + Zod |
| Form client | Invalid email format | Inline field error: "Please enter a valid email address" |
| Form client | Network / fetch error | Toast notification with retry option |
| API route | Validation failure | `400 { ok: false, errors: { field: 'message' } }` |
| API route | Rate limit exceeded | `429 { ok: false, error: 'rate_limited' }` |
| API route | Resend delivery error | Server-side `console.error`, `500 { ok: false, error: 'delivery_failed' }` |
| API route | Newsletter duplicate | `200 { status: 'already_subscribed' }` (not an error) |
| Next.js | Unknown route | `app/not-found.tsx` — branded 404 |

---

## Accessibility

- All interactive elements (buttons, links, inputs, selects) have accessible names via visible labels, `aria-label`, or `aria-labelledby`.
- Focus indicator: `outline: 2px solid #C6A43F; outline-offset: 2px` applied globally in `globals.css` via `:focus-visible`.
- Color contrast meets WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text) in both light and dark themes. Verified during development with the colour pairs: `#0F0F0F` / `#F5F5F5` (14.7:1), `#C6A43F` / `#0F0F0F` (6.7:1).
- Mobile menu, mega menu, and dialogs trap focus using Radix UI primitives (from shadcn/ui).
- All `<Image>` components include descriptive `alt` text; decorative images use `alt=""`.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Dark Mode Theme Preference Persistence

*For any* theme value (`"light"` or `"dark"`) explicitly set by a user interaction, reading `localStorage.getItem('zevrian_theme')` after the `setTheme()` call completes should return the same value, and rendering the page subsequently should apply the matching theme class to the `<html>` element without flash.

**Validates: Requirements 2.3**

---

### Property 2: Reduced-Motion Animation Bypass

*For any* Framer Motion animated component in the application, when the `useReducedMotion()` hook returns `true`, the component should render with its final visible state (`opacity: 1`, `y: 0`, no active transform transition) regardless of the `initial` or `animate` prop values defined in the animation variant.

**Validates: Requirements 4.5**

---

### Property 3: Category Card Content Completeness

*For any* `CategoryItem` data object passed to the `CategoryCard` component, the rendered output should contain: a visual icon element, the category name as accessible text, a non-empty description string, and an anchor element whose `href` attribute points to the Zevrian Direct Amazon store URL and whose `target` attribute is `"_blank"`.

**Validates: Requirements 8.2**

---

### Property 4: Live Form Client-Side Validation

*For any* form data submission to a Live Form where at least one required field is empty or the email field contains a string that does not satisfy RFC 5322 format, the client-side `react-hook-form` + Zod validator should prevent the HTTP request from being dispatched and should expose at least one field-level error message in the rendered form.

**Validates: Requirements 16.3**

---

### Property 5: Live Form Server-Side Validation

*For any* HTTP POST request to `/api/contact` whose JSON body is missing one or more required fields or contains a malformed email value, the route handler should return an HTTP `400` response with a JSON body containing an `errors` object that includes at least one keyed field-level error message.

**Validates: Requirements 16.4**

---

### Property 6: API Rate Limiting Per IP

*For any* IP address, after exactly 10 successful HTTP POST requests to `/api/contact` within a 60-minute sliding window, the 11th request from that same IP address within the same window should receive an HTTP `429` response with `{ ok: false, error: 'rate_limited' }`, and no email delivery attempt should be made for that request.

**Validates: Requirements 16.6**

---

### Property 7: Newsletter Duplicate Subscription Detection

*For any* email address that is already present in the Resend audience list, a POST request to `/api/newsletter` with that address should return `200 { status: 'already_subscribed' }` and should not create a duplicate entry in the audience list.

**Validates: Requirements 17.3**

---

### Property 8: Newsletter Email Format Validation

*For any* string value submitted to the newsletter form that does not match the RFC 5322 `local-part@domain` email pattern — including empty strings, strings without `@`, strings with no domain part, and strings with invalid domain formats — the form validator should reject the value with an inline error message and not dispatch a request to `/api/newsletter`.

**Validates: Requirements 17.4**

---

### Property 9: Cookie Consent Banner Visibility Without Stored Preference

*For any* render of any page in the application when `localStorage` does not contain the key `zevrian_cookie_consent`, the `CookieConsent` component should be visible in the DOM with its description text, "Accept All" button, and decline option all present and accessible.

**Validates: Requirements 19.1**

---

### Property 10: Cookie Consent Persistence Round-Trip

*For any* consent action taken by a visitor (clicking "Accept All" or "Decline"), `localStorage.getItem('zevrian_cookie_consent')` should return a non-null, non-empty string after the action completes, and a subsequent render of the application should not mount the `CookieConsent` banner.

**Validates: Requirements 19.3, 19.4**

---

### Property 11: Page Title Format and Length

*For any* page in the application's eleven-route set, the `metadata.title` value should match the pattern `[Page Name] | ZEVRIAN — Premium Essentials for Modern Life` and the resolved title string should not exceed 70 characters in length.

**Validates: Requirements 20.2**

---

### Property 12: Page Meta Description Length Bounds

*For any* page in the application's eleven-route set, the `metadata.description` string should have a character length that satisfies `120 ≤ length ≤ 160`.

**Validates: Requirements 20.3**

---

### Property 13: Canonical URL Self-Reference

*For any* page rendered by the application, the `<link rel="canonical">` element's `href` attribute should equal the fully qualified canonical URL for that specific page (i.e., `https://zevriangloba.com/{route}`), and no two pages should share the same canonical URL.

**Validates: Requirements 20.8**

---

### Property 14: Interactive Element Accessible Names

*For any* interactive element rendered by any component in the application — including `<button>`, `<a>`, `<input>`, and `<select>` elements — querying its computed accessible name using the ARIA accessible name computation algorithm should return a non-empty string. This property covers the theme toggle button, hamburger button, navigation links, form submit buttons, and all form field labels.

**Validates: Requirements 21.4**

---

### Property 15: Card Grid Responsive Column Count

*For any* `CardGrid` component rendered at a given viewport width, the number of visible columns in the grid layout should satisfy: 1 column when viewport width < 640px, 2 columns when 640px ≤ width < 1024px, and 3 or 4 columns when width ≥ 1024px, as determined by the Tailwind responsive class applied to the grid container.

**Validates: Requirements 22.3**
