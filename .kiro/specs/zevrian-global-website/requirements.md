# Requirements Document

## Introduction

Zevrian Global LLC requires a complete rebuild of the `zevrian-site` web property as an ultra-premium, multi-page corporate and brand website. The new site replaces the existing static HTML prototype with a Next.js (App Router, latest), React, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion stack. The site positions ZEVRIAN as an aspirational consumer goods company operating under an Amazon FBA wholesale-to-private-label growth model, with a future vision of a multi-brand global portfolio.

The site has eleven pages, a unified design system, scroll-triggered animations at Apple/Stripe quality level, live form delivery via EmailJS or Resend, dark mode, a sticky glassmorphism navigation bar with mega menu, a newsletter subscription system, a downloadable company profile PDF, a cookie consent banner, and full SEO instrumentation (meta, Open Graph, JSON-LD). There is no shop, cart, or checkout; all product purchase intent routes externally to the Zevrian Direct Amazon store.

---

## Glossary

- **Website**: The Zevrian Global LLC corporate and brand website being specified here.
- **Next.js App**: The Next.js application using the App Router that renders all eleven pages.
- **Navigation Bar**: The sticky top-level header component present on every page.
- **Mega Menu**: The expanded desktop navigation panel that organises links under labelled sections.
- **Dark Mode**: A site-wide colour-scheme toggle that switches between the light and dark Tailwind CSS theme.
- **Design System**: The shared set of colour tokens, typography scales, spacing values, and component variants defined for the Website.
- **Gold Accent**: The brand accent colour `#C6A43F`.
- **Deep Charcoal**: The primary dark colour `#0F0F0F`.
- **Scroll Animation**: A Framer Motion viewport-triggered animation that plays when the user scrolls an element into view.
- **Glassmorphism**: A visual effect combining a semi-transparent, blurred background with a subtle border, applied to the Navigation Bar.
- **Category Card**: A presentational card on the Product Categories page that describes a product category but contains no purchasable product and no cart action.
- **Zevrian Direct**: The official Zevrian Global LLC store on Amazon, the sole external purchasing destination linked from the Website.
- **Live Form**: A web form whose submission triggers immediate email delivery to a designated recipient address via EmailJS or Resend.
- **Newsletter System**: The email capture and confirmation flow that collects subscriber addresses for Zevrian Global LLC communications.
- **Company Profile PDF**: A downloadable PDF document containing a curated overview of Zevrian Global LLC, made available sitewide.
- **Cookie Consent Banner**: A GDPR-aligned UI component that informs visitors of cookie usage and records their consent choice.
- **JSON-LD Schema**: Structured data embedded in page `<head>` elements following schema.org vocabulary and consumed by search engines.
- **FAQ Section**: A collapsible accordion UI component containing frequently asked questions, deployed on relevant pages.
- **Supplier Inquiry Form**: The Live Form on the Suppliers & Partnerships page that routes enquiries to the Zevrian Global LLC procurement team.
- **Resend / EmailJS**: Third-party transactional email services used to deliver Live Form submissions to internal recipients.

---

## Requirements

### Requirement 1 — Global Design System

**User Story:** As a brand stakeholder, I want every page to render with a consistent premium visual identity, so that ZEVRIAN communicates a single, coherent brand perception.

#### Acceptance Criteria

1. THE Website SHALL use Inter as the sole typographic family, loaded via `next/font` with display swap to prevent layout shift.
2. THE Website SHALL apply the following colour tokens across all pages and components: `#0F0F0F` (Deep Charcoal) as the primary dark colour, `#FFFFFF` as the primary light colour, `#F5F5F5` as the soft-gray surface colour, and `#C6A43F` as the Gold Accent colour.
3. THE Website SHALL expose the colour tokens and typography scale as Tailwind CSS custom theme extensions in `tailwind.config.ts`, making them available as utility classes throughout the codebase.
4. THE Website SHALL use shadcn/ui as the base component library, with all component variants overridden to match the Design System colour tokens and radius values.
5. THE Website SHALL apply a minimum body font size of 16px (1rem) and a heading scale that progresses through 1.25rem, 1.5rem, 1.875rem, 2.25rem, 3rem, and 3.75rem steps to maintain typographic hierarchy.
6. THE Website SHALL not display fabricated social proof, including fake review counts, fake ratings, fake award badges, or unverified certification marks, on any page or component.

---

### Requirement 2 — Dark Mode

**User Story:** As a site visitor, I want to toggle between light and dark colour schemes, so that I can read the site comfortably in any lighting environment.

#### Acceptance Criteria

1. THE Website SHALL implement dark mode using `next-themes`, with `"class"` strategy applied to the `<html>` element.
2. WHEN a visitor activates the dark-mode toggle, THE Website SHALL switch all page backgrounds, text colours, border colours, and card surfaces to their dark-theme counterparts within 150 milliseconds without a full-page reload.
3. THE Website SHALL persist the visitor's theme preference in `localStorage` and restore it on subsequent page loads without a flash of the wrong theme.
4. WHILE the visitor's operating system reports a `prefers-color-scheme: dark` media query and no explicit preference has been stored, THE Website SHALL default to the dark theme.
5. THE Navigation Bar SHALL include a theme toggle button that displays a sun icon in dark mode and a moon icon in light mode, each with an accessible `aria-label` of `"Switch to light mode"` and `"Switch to dark mode"` respectively.

---

### Requirement 3 — Navigation Bar

**User Story:** As a site visitor, I want a persistent, clearly organised navigation bar, so that I can reach any section of the Website without losing my place on the current page.

#### Acceptance Criteria

1. THE Navigation Bar SHALL be sticky, remaining visible at the top of the viewport when the visitor scrolls down any page.
2. THE Navigation Bar SHALL apply a Glassmorphism effect — a backdrop blur of at least 12px, a semi-transparent background with 80% opacity, and a 1px bottom border using the Gold Accent at 20% opacity — once the visitor scrolls more than 10px from the top of any page.
3. THE Navigation Bar SHALL contain the ZEVRIAN wordmark logo as a link to the Home page, all primary page links, the dark-mode toggle, and a mobile hamburger button.
4. WHEN the viewport width is 1024px or wider, THE Navigation Bar SHALL display a horizontal link row with a Mega Menu dropdown for the "Our Company" group containing links to About, Brand, Amazon Excellence, Quality Assurance, and Future Vision pages.
5. WHEN the viewport width is below 1024px, THE Navigation Bar SHALL hide the horizontal link row and display a hamburger button.
6. WHEN a visitor taps the hamburger button on a viewport narrower than 1024px, THE Navigation Bar SHALL expand a full-height slide-in mobile menu containing all page links, with a visible close control.
7. THE Navigation Bar SHALL highlight the link corresponding to the active page using the Gold Accent colour.

---

### Requirement 4 — Scroll Animations

**User Story:** As a site visitor, I want page sections and elements to animate gracefully as I scroll, so that the browsing experience feels premium and engaging.

#### Acceptance Criteria

1. THE Next.js App SHALL implement all scroll-triggered animations using Framer Motion `motion` components with `whileInView` and `viewport={{ once: true }}` props to fire each animation exactly once per page load.
2. WHEN a section heading enters the viewport, THE Next.js App SHALL animate the heading from `opacity: 0, y: 24` to `opacity: 1, y: 0` over 600 milliseconds using an `easeOut` easing curve.
3. WHEN a card grid enters the viewport, THE Next.js App SHALL stagger the reveal of individual cards with a 100 millisecond delay between each card's animation.
4. WHEN a full-width section block enters the viewport, THE Next.js App SHALL animate the block from `opacity: 0, y: 40` to `opacity: 1, y: 0` over 700 milliseconds.
5. THE Next.js App SHALL respect the visitor's `prefers-reduced-motion` media query by disabling all Framer Motion animations and rendering elements in their final visible state when the query resolves to `reduce`.
6. WHEN the Hero section on the Home page loads, THE Next.js App SHALL animate the headline from `opacity: 0, y: 32` to `opacity: 1, y: 0` over 800 milliseconds and animate the subheading with a 200 millisecond stagger delay after the headline.

---

### Requirement 5 — Home Page

**User Story:** As a first-time visitor, I want a compelling, structured home page, so that I can quickly understand who Zevrian Global LLC is and what the ZEVRIAN brand offers.

#### Acceptance Criteria

1. THE Home page SHALL contain the following sections in this vertical order: Hero, Brand Introduction, Mission Statement, Product Focus Areas, Trust Pillars, Amazon Excellence Teaser, Newsletter Capture, and Footer.
2. THE Hero section SHALL display the tagline "Premium Essentials for Modern Life", a short brand descriptor of no more than two sentences, and a primary call-to-action button labelled "Explore Products" that navigates to the Product Categories page.
3. THE Product Focus Areas section SHALL display four category tiles representing Home & Kitchen, Office & Workspace, Household Essentials, and Lifestyle Products, each as a presentational card with an icon, label, and brief description, with no purchase action.
4. THE Trust Pillars section SHALL display a minimum of three pillars drawn from the company's real operational strengths — such as quality sourcing, FBA fulfilment, and customer focus — without fabricated statistics or unverified claims.
5. THE Amazon Excellence Teaser section SHALL include a brief introduction to the Zevrian Direct Amazon store model and a button labelled "Discover Zevrian Direct" that navigates to the Amazon Excellence page.
6. THE Newsletter Capture section SHALL include an email input field, a submission button labelled "Subscribe", and a single-sentence privacy note confirming that addresses will not be shared with third parties.
7. THE Footer SHALL be present at the bottom of every page and SHALL contain the ZEVRIAN wordmark, links to Privacy Policy and Terms of Service, the company's registered state (Wyoming, USA), the copyright notice "© [current year] Zevrian Global LLC. All rights reserved.", and the contact email address.

---

### Requirement 6 — About Page

**User Story:** As a prospective partner or investor, I want to read the full company story on a dedicated About page, so that I can evaluate the background and direction of Zevrian Global LLC.

#### Acceptance Criteria

1. THE About page SHALL present content in the following sections: Company Origin Story, Vision Statement, Mission Statement, Core Values, Leadership Philosophy, and Growth Roadmap.
2. THE Company Origin Story section SHALL describe the founding of Zevrian Global LLC and its evolution from an Amazon reseller to a private-label consumer goods company in no more than four paragraphs.
3. THE Core Values section SHALL list a minimum of four named company values, each with a one- to two-sentence elaboration, presented as a visually distinct card or icon-row layout.
4. THE Growth Roadmap section SHALL present the business maturity stages in chronological order — Amazon FBA Wholesale, Private Label launch, multi-brand expansion, global distribution — as a timeline or step-indicator component.
5. THE About page SHALL not display named individuals, photographs of people, or biographical details unless those individuals have explicitly consented and their information has been provided for inclusion.

---

### Requirement 7 — Brand Page

**User Story:** As a visitor interested in the ZEVRIAN brand identity, I want a dedicated Brand page, so that I can understand the philosophy and future direction of the brand.

#### Acceptance Criteria

1. THE Brand page SHALL include a full-width ZEVRIAN Brand Showcase section presenting the brand name, tagline, and a visual treatment of the Gold Accent hex colour palette.
2. THE Brand page SHALL include a Brand Philosophy section articulating the design principles and quality standards behind the ZEVRIAN brand in a minimum of three thematic paragraphs.
3. THE Brand page SHALL include a Multi-Brand Future section describing Zevrian Global LLC's intention to expand into additional consumer brands under a parent portfolio model.
4. WHEN a visitor reaches the Brand page, THE Brand page SHALL render the ZEVRIAN wordmark in a visually prominent hero treatment using the Inter font at a minimum size of 4rem on desktop viewports.

---

### Requirement 8 — Product Categories Page

**User Story:** As a visitor looking to discover ZEVRIAN products, I want a product categories page, so that I can understand the product range before being directed to the Amazon store to purchase.

#### Acceptance Criteria

1. THE Product Categories page SHALL display exactly four Category Cards: Home & Kitchen, Office & Workspace, Household Essentials, and Lifestyle Products.
2. EACH Category Card SHALL contain a category icon or visual, the category name, a brief description of no more than two sentences, and a button labelled "Shop on Amazon" that opens the Zevrian Direct Amazon store URL in a new browser tab.
3. THE Product Categories page SHALL not display individual product listings, SKU data, pricing, stock levels, a shopping cart, or any checkout flow.
4. THE Product Categories page SHALL include a section below the Category Cards that links to the Amazon Excellence page, reinforcing the Zevrian Direct fulfilment model.
5. WHEN a visitor hovers over a Category Card on a pointer device, THE Product Categories page SHALL animate the card with a `translateY(-6px)` lift and an elevated box shadow transition over 250 milliseconds.

---

### Requirement 9 — Amazon Excellence Page

**User Story:** As a prospective B2B partner or curious consumer, I want a dedicated Amazon Excellence page, so that I can understand how the Zevrian Direct fulfilment model works and why it ensures product quality.

#### Acceptance Criteria

1. THE Amazon Excellence page SHALL contain sections covering the following topics: the Zevrian Direct store model, Amazon FBA infrastructure and fulfilment benefits, quality control within the FBA pipeline, and advantages for end customers.
2. THE Amazon Excellence page SHALL include a prominent call-to-action button labelled "Visit Zevrian Direct on Amazon" that opens the Zevrian Direct Amazon store URL in a new browser tab.
3. THE Amazon Excellence page SHALL present an FAQ Section containing a minimum of four questions and answers addressing common visitor questions about the Zevrian Direct purchasing experience.
4. THE Amazon Excellence page SHALL not fabricate Amazon seller metrics, star ratings, review counts, or badges.

---

### Requirement 10 — Suppliers & Partnerships Page

**User Story:** As a potential supplier, wholesale buyer, or distribution partner, I want a dedicated Suppliers & Partnerships page, so that I can learn about partnership criteria and submit a formal inquiry.

#### Acceptance Criteria

1. THE Suppliers & Partnerships page SHALL contain three distinct informational sections: Supplier Inquiry, Wholesale Partnership, and Distribution Opportunities, each with a heading and a paragraph description of the relevant engagement model.
2. THE Suppliers & Partnerships page SHALL include a Supplier Inquiry Form with the following required fields: Full Name, Company Name, Company Website (URL), Country of Operation, Product Categories (multi-select or text), Minimum Order Quantity, and Message.
3. THE Suppliers & Partnerships page SHALL include a Partnership Interest Form with the following required fields: Full Name, Organisation Name, Partnership Type (dropdown: Wholesale / Distribution / Co-branding / Other), Country, and Message.
4. WHEN a visitor submits the Supplier Inquiry Form with all required fields populated and valid, THE Suppliers & Partnerships page SHALL deliver the form data by email to the designated Zevrian Global LLC recipient address via Resend or EmailJS within 10 seconds and display a success confirmation message to the visitor.
5. IF the Supplier Inquiry Form submission fails due to a network or service error, THEN THE Suppliers & Partnerships page SHALL display an inline error message instructing the visitor to retry or contact the company directly by email.
6. WHEN a visitor submits the Partnership Interest Form with all required fields populated and valid, THE Suppliers & Partnerships page SHALL deliver the form data by email to the designated recipient via Resend or EmailJS and display a success confirmation message.

---

### Requirement 11 — Quality Assurance Page

**User Story:** As a prospective supplier or business partner, I want to read about Zevrian Global LLC's quality standards, so that I can assess alignment with my own compliance and manufacturing requirements.

#### Acceptance Criteria

1. THE Quality Assurance page SHALL cover the following topics in clearly labelled sections: Sourcing Standards, Supplier Vetting Process, Inspection Procedures, and Regulatory Compliance Approach.
2. THE Sourcing Standards section SHALL articulate the material, safety, and durability criteria applied when evaluating products for inclusion in the ZEVRIAN range.
3. THE Supplier Vetting Process section SHALL describe the evaluation steps applied to prospective suppliers without naming specific, unverified third-party certification bodies as partners.
4. THE Regulatory Compliance Approach section SHALL reference the applicable regulatory frameworks (such as US consumer product safety standards) rather than claiming specific certifications not yet held.
5. THE Quality Assurance page SHALL include an FAQ Section containing a minimum of three questions and answers related to quality and compliance topics.

---

### Requirement 12 — Future Vision Page

**User Story:** As an investor or strategic partner, I want to read about Zevrian Global LLC's long-term ambitions, so that I can evaluate the company's growth trajectory.

#### Acceptance Criteria

1. THE Future Vision page SHALL present a Global Expansion Roadmap section that maps planned geographic markets and entry timelines as forward-looking projections, clearly marked as aspirational goals rather than confirmed achievements.
2. THE Future Vision page SHALL include a Multi-Brand Ecosystem section describing the company's intention to develop multiple consumer brands under the Zevrian Global LLC parent entity.
3. THE Future Vision page SHALL include a Private Label Scaling section that explains the transition path from Amazon wholesale to owned-brand private label products.
4. THE Future Vision page SHALL frame all roadmap milestones with language such as "planned", "targeted", or "projected" to distinguish goals from current operational status.

---

### Requirement 13 — Contact Page

**User Story:** As a visitor with a business inquiry, supplier question, or partnership request, I want a Contact page with clearly organised forms, so that I can reach the appropriate team at Zevrian Global LLC.

#### Acceptance Criteria

1. THE Contact page SHALL present three distinct inquiry forms: General Business Inquiry, Supplier Contact, and Partnership Request.
2. THE General Business Inquiry Form SHALL include the following required fields: Full Name, Email Address, Subject, and Message.
3. THE Supplier Contact Form SHALL include the following required fields: Full Name, Company Name, Email Address, Country, and Message.
4. THE Partnership Request Form SHALL include the following required fields: Full Name, Organisation Name, Email Address, Partnership Type (dropdown), and Message.
5. WHEN a visitor submits any Contact page form with all required fields populated and valid, THE Contact page SHALL deliver the submission by email to the designated Zevrian Global LLC recipient via Resend or EmailJS within 10 seconds and display a success confirmation message.
6. IF a Contact page form submission fails, THEN THE Contact page SHALL display an inline error message instructing the visitor to retry or contact the company directly by email.
7. THE Contact page SHALL display the company's registered location (Sheridan, Wyoming, USA) and the contact email address as static information, independent of form status.

---

### Requirement 14 — Privacy Policy Page

**User Story:** As a site visitor, I want to read Zevrian Global LLC's privacy policy, so that I can understand how my personal data is collected, used, and protected.

#### Acceptance Criteria

1. THE Privacy Policy page SHALL be accessible via the footer link labelled "Privacy Policy" from every page of the Website.
2. THE Privacy Policy page SHALL contain the following sections: Introduction, Data Collection, Use of Data, Cookies, Third-Party Services, Data Retention, User Rights, and Contact Information.
3. THE Privacy Policy page SHALL identify Zevrian Global LLC, incorporated in Wyoming, USA, as the data controller.
4. THE Privacy Policy page SHALL reference the use of third-party email delivery services (Resend or EmailJS) and the Newsletter service provider as processors of visitor-submitted data.
5. THE Privacy Policy page SHALL include the date of last revision in ISO 8601 format (YYYY-MM-DD) in the document header.

---

### Requirement 15 — Terms of Service Page

**User Story:** As a site visitor, I want to read Zevrian Global LLC's terms of service, so that I understand the legal conditions governing my use of the Website.

#### Acceptance Criteria

1. THE Terms of Service page SHALL be accessible via the footer link labelled "Terms of Service" from every page of the Website.
2. THE Terms of Service page SHALL include sections covering: Acceptance of Terms, Intellectual Property, Limitation of Liability, External Links (including the Zevrian Direct Amazon store), Governing Law (Wyoming, USA), and Contact Information.
3. THE Terms of Service page SHALL include the date of last revision in ISO 8601 format (YYYY-MM-DD) in the document header.
4. THE Terms of Service page SHALL state that Zevrian Global LLC is not responsible for the content, policies, or operations of the Amazon Zevrian Direct store, and that purchases made there are subject to Amazon's terms.

---

### Requirement 16 — Live Contact Forms & Email Delivery

**User Story:** As Zevrian Global LLC staff, I want form submissions from the Website to arrive in an inbox immediately, so that we can respond to business inquiries, supplier contacts, and partnership requests without manual data collection.

#### Acceptance Criteria

1. THE Next.js App SHALL use either Resend (via a Next.js API Route or Server Action) or EmailJS (via client-side SDK) as the email delivery mechanism for all Live Forms on the Website.
2. WHEN a visitor submits any Live Form with valid data, THE Next.js App SHALL transmit the form payload to the configured email delivery service and wait for a delivery confirmation before displaying a success state.
3. THE Next.js App SHALL validate all Live Form fields on the client before submission, displaying field-level error messages for missing required fields and for invalid email address formats.
4. THE Next.js App SHALL validate all Live Form fields on the server before dispatching email, returning a 400 response with field-level error detail if any required field is absent or malformed.
5. IF the email delivery service returns an error, THEN THE Next.js App SHALL log the error server-side and return a 500 response, and the client SHALL display an inline error message.
6. THE Next.js App SHALL protect all API Routes and Server Actions that trigger email delivery with a rate limit of no more than 10 submissions per IP address per hour to prevent abuse.

---

### Requirement 17 — Newsletter System

**User Story:** As Zevrian Global LLC's marketing team, I want a newsletter subscription system on the Website, so that we can build an opt-in email audience for product launches and brand communications.

#### Acceptance Criteria

1. THE Website SHALL display a Newsletter Capture section on the Home page and a Newsletter subscribe prompt in the Footer of every page.
2. WHEN a visitor enters a valid email address and clicks "Subscribe", THE Next.js App SHALL transmit the address to the configured email list provider or Resend audience list and display a confirmation message reading "Thank you for subscribing!" within 5 seconds.
3. IF a visitor submits an email address that is already registered in the list, THEN THE Next.js App SHALL display a message reading "You're already subscribed." without creating a duplicate entry.
4. THE Newsletter form SHALL validate that the submitted value matches a standard email address pattern (RFC 5322 local-part@domain format) before transmitting, displaying an inline error for invalid formats.
5. THE Newsletter form SHALL include a single-sentence notice adjacent to the subscribe button stating that Zevrian Global LLC will not share subscriber addresses with third parties.

---

### Requirement 18 — Downloadable Company Profile PDF

**User Story:** As a prospective partner or investor, I want to download a company profile PDF from the Website, so that I can review Zevrian Global LLC's overview offline and share it with colleagues.

#### Acceptance Criteria

1. THE Website SHALL make a Company Profile PDF available for download from a minimum of two pages: the About page and the Suppliers & Partnerships page.
2. WHEN a visitor clicks the download button labelled "Download Company Profile", THE Next.js App SHALL initiate a browser download of the PDF file with a descriptive filename in the format `Zevrian-Global-Company-Profile.pdf`.
3. THE Company Profile PDF SHALL be hosted as a static asset within the Next.js public directory, served with a `Content-Disposition: attachment` header to trigger a browser download rather than inline rendering.
4. THE Company Profile PDF download link SHALL open in a new browser tab when clicked, using `target="_blank"` and `rel="noopener noreferrer"` attributes.

---

### Requirement 19 — Cookie Consent Banner

**User Story:** As a site visitor in a GDPR-regulated region, I want to be informed about cookie usage and give or withhold consent, so that my data rights are respected before any non-essential cookies are set.

#### Acceptance Criteria

1. WHEN a visitor loads any page of the Website for the first time without a stored consent preference, THE Website SHALL display a Cookie Consent Banner at the bottom of the viewport before any non-essential cookies are set.
2. THE Cookie Consent Banner SHALL contain a brief description of cookie usage, an "Accept All" button, and a "Manage Preferences" or "Decline" option.
3. WHEN a visitor clicks "Accept All", THE Cookie Consent Banner SHALL dismiss immediately, store the acceptance in `localStorage` under the key `zevrian_cookie_consent`, and permit all configured analytics and third-party scripts to initialise.
4. WHEN a visitor clicks "Decline" or "Manage Preferences" and declines non-essential cookies, THE Cookie Consent Banner SHALL dismiss, store the refusal in `localStorage`, and prevent non-essential third-party scripts from loading.
5. WHILE a stored consent preference exists in `localStorage`, THE Website SHALL not display the Cookie Consent Banner on subsequent page loads.

---

### Requirement 20 — SEO, Open Graph & JSON-LD Schema

**User Story:** As the Zevrian Global LLC marketing team, I want every page to be properly instrumented for search engines and social sharing, so that organic discovery and link previews perform at a professional standard.

#### Acceptance Criteria

1. THE Next.js App SHALL export a unique `metadata` object from every page file using the Next.js App Router `generateMetadata` API, containing `title`, `description`, `openGraph.title`, `openGraph.description`, `openGraph.url`, `openGraph.type`, and `openGraph.images` fields.
2. THE page `<title>` for every page SHALL follow the format `[Page Name] | ZEVRIAN — Premium Essentials for Modern Life`, with a maximum character length of 70.
3. THE meta `description` for every page SHALL be a unique sentence of 120–160 characters summarising the page content.
4. THE Home page SHALL include a JSON-LD `Organization` schema object in the page `<head>` containing `name`, `url`, `logo`, `address`, `contactPoint`, and `sameAs` (Zevrian Direct Amazon store URL) properties.
5. THE Product Categories page SHALL include a JSON-LD `ItemList` schema object listing the four category names.
6. THE Next.js App SHALL generate a `sitemap.xml` using `next-sitemap` or the built-in Next.js sitemap API, listing all eleven pages with their canonical URLs.
7. THE Next.js App SHALL generate a `robots.txt` file that permits all pages to be crawled and references the `sitemap.xml` URL.
8. THE Next.js App SHALL include a `<link rel="canonical">` element on every page pointing to the page's own canonical URL to prevent duplicate-content indexing.

---

### Requirement 21 — Performance & Accessibility

**User Story:** As a Zevrian Global LLC stakeholder, I want the Website to load fast and meet accessibility standards, so that visitors on any device or with any assistive need can use the site without friction.

#### Acceptance Criteria

1. THE Next.js App SHALL achieve a Lighthouse Performance score of 90 or above and a Lighthouse Accessibility score of 95 or above when tested from a desktop Chrome environment against the production build.
2. THE Next.js App SHALL use `next/image` for all raster images to enable automatic format selection (WebP/AVIF), lazy loading, and responsive `srcset` generation.
3. THE Next.js App SHALL use `next/font` with `display: swap` for the Inter font to prevent invisible-text flash during font loading.
4. ALL interactive elements on the Website SHALL have an accessible name provided via visible label text, `aria-label`, or `aria-labelledby`, making them operable by screen reader users.
5. THE Website SHALL maintain a minimum colour-contrast ratio of 4.5:1 for normal text and 3:1 for large text against their respective backgrounds in both light and dark themes, in conformance with WCAG 2.1 Level AA.
6. THE Next.js App SHALL be fully operable via keyboard navigation, with a visible focus indicator on all interactive elements that meets a minimum 2px outline width.
7. WHEN the page is first loaded, THE Next.js App SHALL render above-the-fold content server-side so that the First Contentful Paint occurs before any client-side JavaScript hydration completes.

---

### Requirement 22 — Mobile Responsiveness

**User Story:** As a mobile visitor, I want every page of the Website to be fully usable on a small screen, so that I receive the same premium experience regardless of my device.

#### Acceptance Criteria

1. THE Website SHALL use a mobile-first Tailwind CSS layout strategy, with base styles targeting viewports of 375px width and breakpoint overrides applied at `sm` (640px), `md` (768px), `lg` (1024px), and `xl` (1280px).
2. THE Navigation Bar SHALL collapse to the hamburger-and-slide-in mobile menu pattern on viewports narrower than 1024px as specified in Requirement 3.
3. ALL card grid layouts SHALL render as a single-column stack on viewports narrower than 640px, as a two-column grid between 640px and 1023px, and as a three- or four-column grid at 1024px and wider, as appropriate to content density.
4. ALL Live Forms SHALL stack their fields vertically on viewports narrower than 640px, with each field occupying the full available width.
5. THE Hero section on every page SHALL display its headline at a minimum font size of 2.25rem on mobile viewports (< 640px) and scale to a minimum of 3.75rem on desktop viewports (≥ 1280px).

---

### Requirement 23 — Site Architecture & Routing

**User Story:** As a developer or SEO practitioner, I want a clean, predictable URL structure, so that pages are easy to navigate and link to.

#### Acceptance Criteria

1. THE Next.js App SHALL implement the following route segments under the App Router: `/` (Home), `/about` (About), `/brand` (Brand), `/products` (Product Categories), `/amazon-excellence` (Amazon Excellence), `/suppliers` (Suppliers & Partnerships), `/quality` (Quality Assurance), `/vision` (Future Vision), `/contact` (Contact), `/privacy-policy` (Privacy Policy), and `/terms-of-service` (Terms of Service).
2. THE Next.js App SHALL return a custom 404 page with a branded error message and a link back to the Home page for any URL that does not match a defined route.
3. THE Next.js App SHALL use a shared `layout.tsx` root layout that wraps all pages with the Navigation Bar, Cookie Consent Banner, and Footer components so that these elements are rendered once and never duplicated across page transitions.
4. WHEN a visitor navigates between pages using the Navigation Bar links, THE Next.js App SHALL perform a client-side transition without a full browser reload, using the Next.js App Router `<Link>` component.
