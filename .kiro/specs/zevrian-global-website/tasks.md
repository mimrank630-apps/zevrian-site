# Implementation Plan: Zevrian Global LLC Corporate Website

## Overview

Complete rebuild of the Zevrian Global LLC web presence as a Next.js 15 (App Router) application in TypeScript. The implementation replaces the existing static HTML/CSS/JS prototype with a server-rendered, TypeScript-first React application featuring scroll-triggered animations at Apple/Stripe quality level, dark mode, glassmorphism navigation with mega menu, live form delivery via Resend, newsletter capture, a downloadable Company Profile PDF, cookie consent, and full SEO instrumentation across eleven pages. There is no e-commerce layer; all purchasing intent routes externally to the Zevrian Direct Amazon store.

---

## Tasks

- [ ] 1. Project initialisation & build configuration
  - [ ] 1.1 Scaffold a new Next.js 15 (App Router) project with TypeScript and Tailwind CSS; install all project dependencies: `framer-motion`, `next-themes`, `react-hook-form`, `@hookform/resolvers`, `zod`, `resend`, `next-sitemap`, `lucide-react`; initialise shadcn/ui CLI selecting the "New York" style with components generated into `components/ui/`
    - Run `npx create-next-app@latest` with `--typescript --tailwind --app --src-dir=no` flags then `npx shadcn-ui@latest init`
    - _Requirements: 23.1_
  - [ ] 1.2 Configure `next.config.ts` (strict mode, `images.remotePatterns`, response headers for `Content-Disposition: attachment` on `/Zevrian-Global-Company-Profile.pdf`); configure `tsconfig.json` with `@/*` path alias; create `next-sitemap.config.js` with `siteUrl`, `generateRobotsTxt: true`, per-route `priority` values, and `postbuild` script in `package.json`; create `.env.example` documenting `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `RESEND_AUDIENCE_ID`, `NEXT_PUBLIC_SITE_URL`, `AMAZON_STORE_URL`
    - _Requirements: 18.3, 20.6, 20.7, 23.1_

- [ ] 2. Design system — Tailwind config, CSS custom properties, and fonts
  - [ ] 2.1 Configure `tailwind.config.ts`: set `darkMode: 'class'`; extend `theme.colors` with `charcoal` (`DEFAULT: '#0F0F0F'`, `50: '#1A1A1A'`), `gold` (`DEFAULT: '#C6A43F'`, `muted: 'rgba(198,164,63,0.20)'`, `hover: '#D4B54D'`), and `surface` (`light: '#F5F5F5'`, `white: '#FFFFFF'`); extend `theme.fontSize` with the six-step scale: `text-body` (1rem), `text-sm-heading` (1.25rem), `text-md-heading` (1.5rem), `text-lg-heading` (1.875rem), `text-xl-heading` (2.25rem), `text-2xl-heading` (3rem), `text-3xl-heading` (3.75rem)
    - _Requirements: 1.2, 1.3, 1.5_
  - [ ] 2.2 Implement `app/globals.css`: add `@tailwind base/components/utilities` directives; declare `:root` CSS custom properties (`--bg-primary: #FFFFFF`, `--bg-surface: #F5F5F5`, `--text-primary: #0F0F0F`, `--text-muted: #6B7280`, `--border: #E5E7EB`) and their `.dark` overrides (`--bg-primary: #0F0F0F`, `--bg-surface: #1A1A1A`, `--text-primary: #F5F5F5`, `--text-muted: #9CA3AF`, `--border: #2A2A2A`); add global `:focus-visible` rule: `outline: 2px solid #C6A43F; outline-offset: 2px`
    - _Requirements: 1.2, 2.1, 21.5, 21.6_
  - [ ] 2.3 Create `lib/fonts.ts` exporting `const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })` via `next/font/google`; this export is consumed by the root layout to apply the font variable class to `<html>`
    - _Requirements: 1.1, 21.3_
  - [ ] 2.4 Override shadcn/ui primitive variants in `components/ui/` to apply design tokens: primary action Button (`bg-gold text-charcoal hover:bg-gold-hover`); surface Card (`bg-surface-light dark:bg-charcoal-50 rounded-xl border border-border`); Input focus ring (`ring-gold/50`); border radii `rounded-xl` for cards and `rounded-lg` for inputs and buttons; update the shared `cn()` utility as needed
    - _Requirements: 1.4_

- [ ] 3. Core library utilities
  - [ ] 3.1 Create `lib/animations.ts` exporting five named Framer Motion variant objects: `fadeUpVariant` (`hidden: { opacity:0, y:24 }` → `visible: { opacity:1, y:0, transition:{ duration:0.6, ease:'easeOut' } }`), `fadeUpSectionVariant` (y:40, 700ms), `heroVariant` (y:32, 800ms), `staggerContainer` (`visible: { transition:{ staggerChildren:0.1 } }`), and `cardVariant` (y:24, 500ms)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6_
  - [ ] 3.2 Create `lib/metadata.ts` exporting `baseMetadata: Metadata` (with `metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL)`, `openGraph.siteName: 'ZEVRIAN'`, `twitter.card: 'summary_large_image'`, `robots: { index:true, follow:true }`); create `lib/email-templates.ts` exporting `buildEmailHtml(ctx: EmailTemplateContext): string` and `buildEmailText(ctx: EmailTemplateContext): string` that render all three form types (`general`, `supplier`, `partnership`) using template literals with the submitted fields, `submittedAt`, and `ipAddress`
    - _Requirements: 16.2, 20.1_
  - [ ] 3.3 Create `lib/validations.ts` defining and exporting all Zod schemas: `GeneralInquirySchema` (formType `'general'`, name, email, subject, message ≥ 10 chars), `SupplierInquirySchema` (formType `'supplier'`, name, company, website URL, country, productCategories, moq, message), `PartnershipSchema` (formType `'partnership'`, name, organisation, partnershipType enum, country, message), `ContactFormSchema` as `z.discriminatedUnion('formType', [...])`, and `NewsletterSchema` (`email: z.string().email()`)
    - _Requirements: 16.3, 16.4, 17.4_
  - [ ] 3.4 Create `lib/resend.ts` exporting a singleton `Resend` client initialised from `process.env.RESEND_API_KEY`; create `lib/rate-limit.ts` implementing an in-memory sliding-window rate limiter: `Map<string, number[]>` keyed by IP; `checkRateLimit(ip: string): { limited: boolean }` prunes timestamps older than 1 hour, rejects with `{ limited: true }` when count ≥ 10, otherwise appends current timestamp and returns `{ limited: false }`
    - _Requirements: 16.1, 16.6_
  - [ ]* 3.5 Write property-based test for the rate limiter — Property 6 (unit)
    - **Property 6: API Rate Limiting Per IP** — generate sequences of N calls from IP-A (1 ≤ N ≤ 15) within a 60-minute window; assert `{ limited: false }` for calls 1–10 and `{ limited: true }` for calls 11–N; also assert that any call from a distinct IP-B is always `{ limited: false }` regardless of IP-A's count
    - **Validates: Requirements 16.6**

- [ ] 4. API routes — contact form delivery and newsletter subscription
  - [ ] 4.1 Implement `app/api/contact/route.ts` POST handler: (1) extract IP from `X-Forwarded-For` or `request.ip`; (2) call `checkRateLimit(ip)` — return `429 { ok:false, error:'rate_limited' }` if limited; (3) parse + validate body with `ContactFormSchema` — return `400 { ok:false, errors:{...} }` on failure; (4) call `buildEmailHtml` from `lib/email-templates.ts`; (5) send via Resend client to `process.env.CONTACT_EMAIL_TO`; (6) on success return `200 { ok:true }`; (7) on Resend error `console.error` and return `500 { ok:false, error:'delivery_failed' }`
    - _Requirements: 16.1, 16.2, 16.4, 16.5, 16.6_
  - [ ]* 4.2 Write property-based test for server-side validation in `/api/contact` — Property 5
    - **Property 5: Live Form Server-Side Validation** — generate arbitrary POST bodies with at least one required field missing or with a malformed email string (empty, no `@`, no domain, spaces only); for each generated body assert the handler returns HTTP `400` with a JSON `errors` object containing at least one keyed field-level error message and no Resend call is made
    - **Validates: Requirements 16.4**
  - [ ]* 4.3 Write property-based test for rate-limiting integration in `/api/contact` — Property 6 (integration)
    - **Property 6: API Rate Limiting Per IP — Integration** — simulate 11 valid POST requests from the same IP address within a 60-minute window; assert the first 10 return `200 { ok:true }` (or `400`/`500` depending on payload) but never `429`, and the 11th returns `429 { ok:false, error:'rate_limited' }` with no Resend invocation for that request
    - **Validates: Requirements 16.6**
  - [ ] 4.4 Implement `app/api/newsletter/route.ts` POST handler: (1) validate body with `NewsletterSchema` — return `400` on invalid email; (2) call Resend Audiences API (`resend.contacts.create`) with `RESEND_AUDIENCE_ID`; (3) if Resend returns a "contact already exists" error code return `200 { status:'already_subscribed' }`; (4) on success return `200 { status:'subscribed' }`; (5) on other error return `500 { error:'subscription_failed' }`
    - _Requirements: 17.1, 17.2, 17.3_
  - [ ]* 4.5 Write property-based test for newsletter duplicate subscription detection — Property 7
    - **Property 7: Newsletter Duplicate Subscription Detection** — for any email address that has already been added to the mock audience list, a subsequent POST to `/api/newsletter` with that same address should return `200 { status:'already_subscribed' }` and the mock `resend.contacts.create` should not be called a second time for that address
    - **Validates: Requirements 17.3**
  - [ ]* 4.6 Write property-based test for newsletter email format validation — Property 8
    - **Property 8: Newsletter Email Format Validation** — generate arbitrary invalid email strings (empty string, strings without `@`, strings with no domain part, strings with whitespace only, strings with invalid TLD formats); for each, assert `NewsletterSchema.safeParse({ email })` returns `success: false` and the POST handler returns `400` without calling the Resend API
    - **Validates: Requirements 17.4**

- [ ] 5. Root layout, ThemeProvider & CookieConsent
  - [ ] 5.1 Create `app/layout.tsx` as a Server Component: apply `inter.variable` class and `suppressHydrationWarning` on `<html lang="en">`; mount `<ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="zevrian_theme">` wrapping `<Navbar />`, `<main>{children}</main>`, `<Footer />`, and `<CookieConsent />`; set `<body className="bg-[--bg-primary] text-[--text-primary]">` for CSS custom property theming
    - _Requirements: 2.1, 2.3, 2.4, 23.3_
  - [ ]* 5.2 Write property-based test for dark mode theme preference persistence — Property 1
    - **Property 1: Dark Mode Theme Preference Persistence** — for each value in `['light', 'dark']`, simulate a `setTheme(value)` call via `next-themes`; assert `localStorage.getItem('zevrian_theme')` equals the exact value after the call, and assert a re-render of the root layout applies the corresponding `dark` class presence/absence on the `<html>` element without an intermediate flash of the opposing theme
    - **Validates: Requirements 2.3**
  - [ ] 5.3 Implement `components/layout/CookieConsent.tsx` as a `"use client"` component: on mount read `localStorage.getItem('zevrian_cookie_consent')`; if absent, render a fixed `bottom-0 z-50` glassmorphism banner (`backdrop-blur-md bg-white/80 dark:bg-charcoal/80 border-t border-gold-muted`) containing description text, an "Accept All" button (writes `'accepted'` to `localStorage['zevrian_cookie_consent']`) and a "Decline" button (writes `'declined'`); hide banner immediately on either action via state; on subsequent renders with a stored value, do not mount the banner
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5_
  - [ ]* 5.4 Write property-based test for cookie consent banner visibility without stored preference — Property 9
    - **Property 9: Cookie Consent Banner Visibility Without Stored Preference** — render `CookieConsent` in an environment where `localStorage` does not contain `zevrian_cookie_consent`; assert the banner element is present in the DOM, the description text is non-empty and accessible, the "Accept All" button is queryable, and the decline option is present and accessible
    - **Validates: Requirements 19.1**
  - [ ]* 5.5 Write property-based test for cookie consent persistence round-trip — Property 10
    - **Property 10: Cookie Consent Persistence Round-Trip** — for each action in `['Accept All', 'Decline']`, simulate a click on the corresponding banner button; assert (a) `localStorage.getItem('zevrian_cookie_consent')` is a non-null, non-empty string immediately after the action, and (b) re-mounting the `CookieConsent` component does not render the banner element in the DOM
    - **Validates: Requirements 19.3, 19.4**

- [ ] 6. Navigation Bar & Footer
  - [ ] 6.1 Implement `components/layout/Navbar.tsx` as a `"use client"` component with three local state values (`scrolled`, `mobileOpen`, `megaMenuOpen`); attach a `scroll` event listener to set `scrolled` when `window.scrollY > 10`; apply glassmorphism classes conditionally when `scrolled === true` (`backdrop-blur-md bg-white/80 dark:bg-charcoal/80 border-b border-gold-muted`); detect active route with `usePathname()` and apply `text-gold font-semibold` to the matching link; render the ZEVRIAN wordmark as `<Link href="/">`; include a `ThemeToggle` button that reads `useTheme()` and renders a sun icon in dark mode and moon icon in light mode with `aria-label` `"Switch to light mode"` / `"Switch to dark mode"` respectively
    - _Requirements: 2.5, 3.1, 3.2, 3.3, 3.7_
  - [ ] 6.2 Implement the `MegaMenuPanel` desktop dropdown inside `Navbar`: visible only at `lg:block` breakpoint; triggered by hovering or clicking the `"Our Company"` nav item; rendered as an absolute-positioned glassmorphism card containing labelled links to `/about` (About), `/brand` (Brand), `/amazon-excellence` (Amazon Excellence), `/quality` (Quality Assurance), and `/vision` (Future Vision)
    - _Requirements: 3.4_
  - [ ] 6.3 Implement the mobile hamburger button and `MobileMenuOverlay` inside `Navbar`: hamburger visible only below `lg`; clicking it sets `mobileOpen: true` and renders a fixed full-height slide-in panel (from right, Framer Motion `AnimatePresence`) containing stacked `<Link>` items for all 11 routes and a visible close `×` button that sets `mobileOpen: false`
    - _Requirements: 3.5, 3.6_
  - [ ] 6.4 Implement `components/layout/Footer.tsx` as a Server Component: render ZEVRIAN wordmark, a nav link grid covering all 11 routes, Privacy Policy and Terms of Service legal links, company info line ("Sheridan, Wyoming, USA"), contact email address, `<NewsletterCapture>` micro-variant (compact email input + "Subscribe"), and copyright line `© ${new Date().getFullYear()} Zevrian Global LLC. All rights reserved.`
    - _Requirements: 5.7, 17.1_
  - [ ]* 6.5 Write property-based test for interactive element accessible names — Property 14
    - **Property 14: Interactive Element Accessible Names** — for every `<button>`, `<a>`, `<input>`, and `<select>` element rendered by any component (Navbar theme toggle, hamburger button, mega menu links, mobile menu links, all form submit buttons, all form field inputs, Footer nav links, CategoryCard "Shop on Amazon" anchors), query the computed accessible name using the ARIA accessible name algorithm; assert the returned string is non-empty for every element
    - **Validates: Requirements 21.4**

- [ ] 7. Shared section & SEO components
  - [ ] 7.1 Implement the three animated section primitives as `"use client"` components; all three use `useReducedMotion()` from Framer Motion: when `true`, substitute `{ hidden: { opacity:1, y:0 }, visible: { opacity:1, y:0 } }` for all variants; **SectionHeading** (`components/sections/SectionHeading.tsx`): `<motion.h2 variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once:true, margin:'-10%' }}>`; **CardGrid** (`components/sections/CardGrid.tsx`): `<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true }}>` grid container with `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6` mapping children wrapped in `<motion.div variants={cardVariant}>`; **Hero** (`components/sections/Hero.tsx`): `<motion.h1 variants={heroVariant} initial="hidden" animate="visible">` headline + `<motion.p variants={heroVariant} initial="hidden" animate="visible" transition={{ delay:0.2 }}>` subheading — both fire on mount, not `whileInView`
    - _Requirements: 4.1, 4.2, 4.3, 4.5, 4.6, 5.1, 5.2_
  - [ ]* 7.2 Write property-based test for reduced-motion animation bypass — Property 2
    - **Property 2: Reduced-Motion Animation Bypass** — for each of the five components that use Framer Motion variants (`SectionHeading`, `CardGrid`, `Hero`, `CategoryCard`, `FaqAccordion`), render with a mocked `useReducedMotion()` returning `true`; assert the rendered element has `opacity: 1` and no active `transform: translateY(...)` or `opacity` transition in its computed style; assert the element's content is immediately visible in the initial render without waiting for an animation frame
    - **Validates: Requirements 4.5**
  - [ ]* 7.3 Write property-based test for card grid responsive column count — Property 15
    - **Property 15: Card Grid Responsive Column Count** — for the `CardGrid` component, generate an arbitrary integer N (1 ≤ N ≤ 12) of child items and render at three viewport widths: 375px, 768px, and 1280px; assert the grid container's Tailwind classes encode exactly 1 column at 375px breakpoint, 2 columns at 768px breakpoint, and 3 or 4 columns at 1280px breakpoint by inspecting the class attribute string
    - **Validates: Requirements 22.3**
  - [ ] 7.4 Implement `components/sections/CategoryCard.tsx` as a `"use client"` component accepting `CategoryCardProps { icon: React.ReactNode; name: string; description: string; amazonUrl: string }`; render icon, name as accessible heading, description text, and `<a href={amazonUrl} target="_blank" rel="noopener noreferrer">Shop on Amazon</a>` anchor; apply `<motion.div whileHover={{ y:-6, boxShadow:'0 20px 40px rgba(0,0,0,0.15)' }} transition={{ duration:0.25 }}>` wrapper; implement `components/sections/FaqAccordion.tsx` wrapping shadcn/ui `Accordion type="multiple"` to accept `FaqItem[]` and render each as `AccordionItem` with question trigger and answer content
    - _Requirements: 8.2, 8.5, 9.3, 11.5_
  - [ ]* 7.5 Write property-based test for category card content completeness — Property 3
    - **Property 3: Category Card Content Completeness** — generate arbitrary `CategoryItem` objects with valid `name` (non-empty string), `description` (non-empty string), and `amazonUrl` (valid URL string starting with `https://`); for each generated object render `CategoryCard` and assert: (1) a visual icon element is present, (2) the category name appears as accessible text content, (3) the description is non-empty in the DOM, (4) exactly one `<a>` element exists whose `href` equals `amazonUrl` and whose `target` attribute equals `"_blank"`
    - **Validates: Requirements 8.2**
  - [ ] 7.6 Implement `components/sections/NewsletterCapture.tsx` as a `"use client"` component: use `useForm<{ email: string }>({ resolver: zodResolver(NewsletterSchema) })`; render `<FormField>` email input, "Subscribe" `<Button>`, and privacy note `"Zevrian Global LLC will never share your email address with third parties."`; POST to `/api/newsletter`; on `status: 'subscribed'` display `"Thank you for subscribing!"`; on `status: 'already_subscribed'` display `"You're already subscribed."`; on validation error display inline `<FormMessage>`; manage idle → submitting → success/error state
    - _Requirements: 5.6, 17.1, 17.2, 17.3, 17.4, 17.5_
  - [ ] 7.7 Implement `components/seo/JsonLd.tsx` as a Server Component: accept `schema: Record<string, unknown>` prop and render `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />`; this component is placed inside the page's exported `metadata` head or directly in the page JSX as a sibling to page content
    - _Requirements: 20.4, 20.5_

- [ ] 8. Live forms
  - [ ] 8.1 Implement `components/forms/ContactForm.tsx` as a `"use client"` component: `useForm<z.infer<typeof GeneralInquirySchema>>({ resolver: zodResolver(GeneralInquirySchema), defaultValues: { formType:'general', name:'', email:'', subject:'', message:'' } })`; render Full Name, Email Address, Subject, and Message fields using shadcn/ui `Form`/`FormField`/`FormMessage` with inline field-level error display; manage four-state machine `idle → submitting → success | error`; on submit POST to `/api/contact`; success state renders confirmation message; error state renders inline error with retry prompt and `contact@zevriangloba.com`
    - _Requirements: 13.1, 13.2, 13.5, 13.6, 16.3_
  - [ ] 8.2 Implement `components/forms/SupplierForm.tsx` as a `"use client"` component: `useForm` with `SupplierInquirySchema` resolver; render fields: Full Name, Company Name, Company Website (URL validation), Country, Product Categories (text input or multi-select), Minimum Order Quantity, and Message; same four-state machine and error handling as `ContactForm`; POST to `/api/contact` with `formType: 'supplier'`; all fields stack vertically on viewports < 640px
    - _Requirements: 10.2, 10.4, 10.5, 16.3, 22.4_
  - [ ] 8.3 Implement `components/forms/PartnershipForm.tsx` as a `"use client"` component: `useForm` with `PartnershipSchema` resolver; render Full Name, Organisation Name, Partnership Type dropdown (shadcn/ui `Select` with options: Wholesale / Distribution / Co-branding / Other), Country, and Message; same state machine; POST to `/api/contact` with `formType: 'partnership'`; accessible `<label>` on every field
    - _Requirements: 10.3, 10.6, 13.4, 16.3_
  - [ ]* 8.4 Write property-based test for live form client-side validation — Property 4
    - **Property 4: Live Form Client-Side Validation** — for each of the three form components (`ContactForm`, `SupplierForm`, `PartnershipForm`), generate form submission payloads that have at least one required field as empty string or the email field as an invalid RFC 5322 string; trigger `handleSubmit` via `react-hook-form`; assert (a) no `fetch` call to `/api/contact` is dispatched, and (b) at least one `FormMessage` element is rendered in the DOM with a non-empty error string
    - **Validates: Requirements 16.3**

- [ ] 9. Checkpoint — Ensure all tests pass, ask the user if questions arise.
  - Ensure all library utilities, API routes, layout components, animation components, shared section components, and live forms are complete and all non-optional tests pass before proceeding to page implementation.

- [ ] 10. Content pages — Home, About & Brand
  - [ ] 10.1 Implement `app/page.tsx` (Home `/`): compose sections in vertical order — `<Hero headline="Premium Essentials for Modern Life" subheading="…" cta={{ label:'Explore Products', href:'/products' }}/>`, `<BrandIntroduction/>` (`fadeUpSectionVariant` block), `<MissionStatement/>` (centred text), `<ProductFocusAreas/>` (`<CardGrid>` of 4 presentational category tiles: Home & Kitchen, Office & Workspace, Household Essentials, Lifestyle Products — no purchase action), `<TrustPillars/>` (≥ 3 pillars: quality sourcing, FBA fulfilment, customer focus — no fabricated statistics), `<AmazonExcellenceTeaser/>` ("Discover Zevrian Direct" `<Button>` → `/amazon-excellence`), `<NewsletterCapture/>`; inject `<JsonLd schema={organizationSchema}/>` with complete `Organization` object (name, url, logo, address with Sheridan/WY/US, contactPoint, sameAs Amazon URL); export `generateMetadata` spreading `baseMetadata` with `title: 'Home | ZEVRIAN — Premium Essentials for Modern Life'`, unique 120–160 char `description`, `openGraph` fields, and `alternates.canonical: 'https://zevriangloba.com'`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 1.6, 20.1, 20.2, 20.3, 20.4_
  - [ ] 10.2 Implement `app/about/page.tsx` (About `/about`): render Company Origin Story (≤ 4 paragraphs, no named individuals or photos per Req 6.5), Vision Statement, Mission Statement, Core Values (≥ 4 named values as icon-row card layout), Leadership Philosophy, and Growth Roadmap as a horizontal-desktop/vertical-mobile step-indicator (`[1] Amazon FBA Wholesale → [2] Private Label Launch → [3] Multi-Brand Expansion → [4] Global Distribution`); render `<a href="/Zevrian-Global-Company-Profile.pdf" download="Zevrian-Global-Company-Profile.pdf" target="_blank" rel="noopener noreferrer">` "Download Company Profile" button; export `generateMetadata` with title, description, openGraph, canonical
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 18.1, 18.2, 18.4, 20.1, 20.2, 20.3_
  - [ ] 10.3 Implement `app/brand/page.tsx` (Brand `/brand`): render full-width Brand Showcase section with ZEVRIAN wordmark at `text-[4rem] lg:text-[6rem]` Inter with Gold Accent gradient (`bg-gradient-to-r from-gold to-gold-hover bg-clip-text text-transparent`); Brand Philosophy section (≥ 3 thematic paragraphs on design principles and quality standards); Multi-Brand Future section describing the portfolio-parent model; export `generateMetadata`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 20.1, 20.2, 20.3_

- [ ] 11. Content pages — Products, Amazon Excellence & Suppliers
  - [ ] 11.1 Implement `app/products/page.tsx` (Product Categories `/products`): render exactly 4 `<CategoryCard>` components inside `<CardGrid>` (Home & Kitchen, Office & Workspace, Household Essentials, Lifestyle Products — each with lucide-react icon, name, ≤ 2-sentence description, `amazonUrl: process.env.AMAZON_STORE_URL`); render Amazon Excellence link section below cards; inject `<JsonLd schema={itemListSchema}/>` with `ItemList` containing 4 `ListItem` entries; export `generateMetadata`; no product listings, SKUs, pricing, cart, or checkout of any kind
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 20.1, 20.2, 20.3, 20.5_
  - [ ] 11.2 Implement `app/amazon-excellence/page.tsx` (Amazon Excellence `/amazon-excellence`): render four sections — Zevrian Direct Store Model, Amazon FBA Infrastructure & Fulfilment Benefits, Quality Control Within the FBA Pipeline, Advantages for End Customers; include `<Button asChild><a href={process.env.AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer">Visit Zevrian Direct on Amazon</a></Button>`; render `<FaqAccordion items={faqItems}/>` with ≥ 4 Q&As covering common Zevrian Direct purchasing questions; no fabricated seller metrics, star ratings, or review counts; export `generateMetadata`
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 20.1, 20.2, 20.3_
  - [ ] 11.3 Implement `app/suppliers/page.tsx` (Suppliers & Partnerships `/suppliers`): render three labelled informational sections (Supplier Inquiry, Wholesale Partnership, Distribution Opportunities — each with heading and paragraph); embed `<SupplierForm/>` under the Supplier Inquiry section and `<PartnershipForm/>` under Partnership; render "Download Company Profile" PDF download anchor (same attributes as About page); export `generateMetadata`
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 18.1, 18.2, 20.1, 20.2, 20.3_

- [ ] 12. Content pages — Quality, Vision & Contact
  - [ ] 12.1 Implement `app/quality/page.tsx` (Quality Assurance `/quality`): render Sourcing Standards (material, safety, and durability criteria), Supplier Vetting Process (evaluation steps, no unverified third-party certifications as confirmed partners), Inspection Procedures, and Regulatory Compliance Approach (references US CPSC frameworks, does not claim unverified certifications) sections; embed `<FaqAccordion items={qualityFaq}/>` with ≥ 3 Q&As on quality and compliance topics; export `generateMetadata`
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 20.1, 20.2, 20.3_
  - [ ] 12.2 Implement `app/vision/page.tsx` (Future Vision `/vision`): render Global Expansion Roadmap section (planned geographic markets and entry timelines explicitly labelled with "planned", "targeted", or "projected" language — never presented as current achievements), Multi-Brand Ecosystem section, and Private Label Scaling section explaining the wholesale-to-owned-brand transition; every milestone uses aspiration-flagging language throughout; export `generateMetadata`
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 20.1, 20.2, 20.3_
  - [ ] 12.3 Implement `app/contact/page.tsx` (Contact `/contact`): render three tabbed or clearly labelled form sections using shadcn/ui `Tabs` or a sectioned scroll layout — General Business Inquiry (`<ContactForm/>`), Supplier Contact (`<SupplierForm/>` in contact variant), Partnership Request (`<PartnershipForm/>`); render a static company information block displaying "Sheridan, Wyoming, USA" and the contact email address independently of form state; export `generateMetadata`
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 20.1, 20.2, 20.3_

- [ ] 13. Legal, static & 404 pages
  - [ ] 13.1 Implement `app/privacy-policy/page.tsx` (Privacy Policy `/privacy-policy`): render revision date in ISO 8601 format (`2025-01-15`) in the document header; render eight sections: Introduction, Data Collection, Use of Data, Cookies, Third-Party Services (identifies Resend and Newsletter service as data processors), Data Retention, User Rights, Contact Information; identify Zevrian Global LLC (Wyoming, USA) as data controller; ensure the page is reachable via the Footer "Privacy Policy" link; export `generateMetadata`
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 20.1, 20.2, 20.3_
  - [ ] 13.2 Implement `app/terms-of-service/page.tsx` (Terms of Service `/terms-of-service`): render revision date in ISO 8601 format in the document header; render six sections: Acceptance of Terms, Intellectual Property, Limitation of Liability, External Links (including explicit disclaimer that purchases on the Zevrian Direct Amazon store are subject to Amazon's own terms and that Zevrian Global LLC is not responsible for Amazon's content or policies), Governing Law (Wyoming, USA), Contact Information; ensure Footer "Terms of Service" link is accessible; export `generateMetadata`
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 20.1, 20.2, 20.3_
  - [ ] 13.3 Implement `app/not-found.tsx` custom 404 page: render ZEVRIAN wordmark in Gold Accent, "Page not found" heading using `fadeUpSectionVariant`, a one-sentence explanation, and a `<Link href="/">` "Back to Home" `<Button>` styled with primary Gold action variant
    - _Requirements: 23.2_

- [ ] 14. SEO completeness & static assets
  - [ ] 14.1 Audit all 11 page files (`page.tsx` for each route) to confirm each exports a `generateMetadata` function (or static `metadata` object) that spreads `baseMetadata` and provides: `title` matching `[Page Name] | ZEVRIAN — Premium Essentials for Modern Life` (≤ 70 chars), `description` (120–160 chars unique sentence), `openGraph.title`, `openGraph.description`, `openGraph.url`, `openGraph.type: 'website'`, `openGraph.images: [{ url: '/og/[page].png', width:1200, height:630 }]`, and `alternates.canonical` pointing to the fully qualified page URL; run `npm run build` to confirm `next-sitemap` generates `sitemap.xml` listing all 11 routes and `robots.txt` with `Allow: /` and sitemap reference
    - _Requirements: 20.1, 20.2, 20.3, 20.6, 20.7, 20.8_
  - [ ]* 14.2 Write property-based test for page title format and length — Property 11
    - **Property 11: Page Title Format and Length** — import the `metadata` export from each of the 11 page files; for each, assert the resolved `title` string matches the regex `^.+ \| ZEVRIAN — Premium Essentials for Modern Life$` and the string length satisfies `length ≤ 70`; fail with the page name and actual title on any mismatch
    - **Validates: Requirements 20.2**
  - [ ]* 14.3 Write property-based test for page meta description length bounds — Property 12
    - **Property 12: Page Meta Description Length Bounds** — import the `metadata` export from each of the 11 page files; for each, assert `metadata.description` is a string and its `.length` satisfies `120 ≤ length ≤ 160`; fail with the page name, actual length, and description text on any violation
    - **Validates: Requirements 20.3**
  - [ ]* 14.4 Write property-based test for canonical URL self-reference — Property 13
    - **Property 13: Canonical URL Self-Reference** — import `metadata.alternates.canonical` from each of the 11 page files; assert each canonical is a string matching `^https://zevriangloba\\.com(/.*)?$`; assert each canonical equals the expected fully qualified URL for its specific route (`https://zevriangloba.com`, `https://zevriangloba.com/about`, etc.); assert all 11 canonical URLs are mutually distinct (no two pages share the same value)
    - **Validates: Requirements 20.8**
  - [ ] 14.5 Add a placeholder `Zevrian-Global-Company-Profile.pdf` file to `public/`; verify `next.config.ts` response headers serve this path with `Content-Disposition: attachment; filename="Zevrian-Global-Company-Profile.pdf"`; confirm the About page and Suppliers page download anchor uses `download="Zevrian-Global-Company-Profile.pdf"` attribute with `target="_blank" rel="noopener noreferrer"`
    - _Requirements: 18.1, 18.2, 18.3, 18.4_
  - [ ] 14.6 Create placeholder 1200×630 PNG files in `public/og/` for all 11 pages: `home.png`, `about.png`, `brand.png`, `products.png`, `amazon-excellence.png`, `suppliers.png`, `quality.png`, `vision.png`, `contact.png`, `privacy-policy.png`, `terms-of-service.png`; these are referenced by each page's `openGraph.images` metadata field
    - _Requirements: 20.1_

- [ ] 15. Final checkpoint — Ensure all tests pass, ask the user if questions arise.
  - Run the full test suite, verify `npm run build` completes without errors, confirm `sitemap.xml` and `robots.txt` are generated, and check that all 15 correctness properties have corresponding test files before closing the implementation.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP delivery
- All 15 Correctness Properties from the design document are covered by property-based test sub-tasks:
  - Property 1 → 5.2, Property 2 → 7.2, Property 3 → 7.5, Property 4 → 8.4, Property 5 → 4.2
  - Property 6 → 3.5 (unit) + 4.3 (integration), Property 7 → 4.5, Property 8 → 4.6
  - Property 9 → 5.4, Property 10 → 5.5, Property 11 → 14.2, Property 12 → 14.3
  - Property 13 → 14.4, Property 14 → 6.5, Property 15 → 7.3
- Use `fast-check` as the property-based testing library; pair with `vitest` and `@testing-library/react` for component rendering
- The existing `/projects/sandbox/zevrian-site/` static HTML prototype is replaced entirely — no files from the prototype are carried over into the Next.js build
- Always reference `process.env.AMAZON_STORE_URL` for the Amazon store URL; never hardcode it in component source
- The Footer copyright year is generated server-side via `new Date().getFullYear()`
- `suppressHydrationWarning` on `<html>` is required when using `next-themes` class strategy to suppress React hydration mismatch
- All roadmap milestones on the Vision page must use aspiration-flagging language ("planned", "targeted", "projected") per Requirement 12.4
- No fabricated social proof (fake reviews, ratings, award badges, unverified certifications) on any page per Requirement 1.6

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["2.1", "2.2", "2.3"] },
    { "id": 3, "tasks": ["2.4", "3.1", "3.2", "3.3", "3.4"] },
    { "id": 4, "tasks": ["3.5", "4.1", "4.4", "5.1"] },
    { "id": 5, "tasks": ["4.2", "4.3", "4.5", "4.6", "5.2", "5.3"] },
    { "id": 6, "tasks": ["5.4", "5.5", "6.1", "7.1"] },
    { "id": 7, "tasks": ["6.2", "6.3", "7.2", "7.3", "7.4"] },
    { "id": 8, "tasks": ["6.4", "7.5", "7.6", "7.7", "8.1", "8.2", "8.3"] },
    { "id": 9, "tasks": ["6.5", "8.4", "10.1", "10.2", "10.3", "11.1", "11.2", "11.3", "12.1", "12.2", "12.3", "13.1", "13.2", "13.3"] },
    { "id": 10, "tasks": ["14.1"] },
    { "id": 11, "tasks": ["14.2", "14.3", "14.4", "14.5", "14.6"] }
  ]
}
```
