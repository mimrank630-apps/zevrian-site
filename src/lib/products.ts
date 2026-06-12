import type { Category, CategorySlug, Product } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    tagline: "Culinary tools, refined.",
    description:
      "High-end culinary tools, sleek coffee accessories, and modern hosting goods engineered for everyday craft.",
  },
  {
    slug: "home-organization",
    name: "Home Organization",
    tagline: "Order, beautifully kept.",
    description:
      "Minimalist storage solutions, aesthetic desktop trays, and premium decor gear that bring calm to any space.",
  },
  {
    slug: "travel-outdoor",
    name: "Travel & Outdoor",
    tagline: "Built for the move.",
    description:
      "Insulated bottles, structured travel cases, and smart commuter essentials made for life in motion.",
  },
];

export const products: Product[] = [
  // ----------------------- Kitchen & Dining -----------------------
  {
    slug: "precision-pour-over-coffee-kettle",
    name: "Precision Pour-Over Coffee Kettle",
    category: "kitchen-dining",
    price: 49.99,
    compareAtPrice: 64.99,
    rating: 4.8,
    reviewCount: 234,
    shortDescription:
      "Gooseneck precision and a built-in thermometer for cafe-grade pour-over at home.",
    description:
      "Engineered with a gooseneck spout for precise water flow control. The built-in thermometer ensures your water sits at the perfect temperature for an even, balanced pour-over extraction every time.",
    features: [
      "Gooseneck spout for precise pour control",
      "Built-in analog thermometer (160-212°F)",
      "1.0L brushed stainless steel body",
      "Ergonomic counterbalanced handle",
      "Compatible with all stovetops, including induction",
    ],
    benefits: [
      { title: "Barista-grade control", detail: "Slow, steady flow lets you bloom and saturate grounds evenly." },
      { title: "No guesswork", detail: "Read your brew temperature at a glance for repeatable results." },
      { title: "Built to last", detail: "Food-grade stainless steel resists corrosion and warping." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-amber-100 via-stone-100 to-stone-200",
    badge: "Best Seller",
  },
  {
    slug: "bamboo-magnetic-knife-block",
    name: "Bamboo Magnetic Knife Block",
    category: "kitchen-dining",
    price: 64.99,
    rating: 4.7,
    reviewCount: 189,
    shortDescription:
      "Sustainable Moso bamboo with strong magnets to keep blades visible and safe.",
    description:
      "A sustainably sourced bamboo knife block with powerful embedded magnets. Keeps your blades visible, accessible, and safely stored without dulling their edges.",
    features: [
      "Sustainably harvested Moso bamboo",
      "Neodymium magnets hold up to 12 knives",
      "Double-sided angled display",
      "Non-slip silicone base",
      "Naturally antimicrobial surface",
    ],
    benefits: [
      { title: "Edge-friendly", detail: "Magnets hold blades without the abrasion of slotted blocks." },
      { title: "Counter sculpture", detail: "A warm bamboo silhouette that looks intentional on display." },
      { title: "Effortless to clean", detail: "Wipe-down surface with no hidden slots to trap debris." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-orange-50 via-amber-50 to-stone-200",
  },
  {
    slug: "insulated-french-press",
    name: "Insulated French Press (34oz)",
    category: "kitchen-dining",
    price: 39.99,
    rating: 4.6,
    reviewCount: 312,
    shortDescription:
      "Double-wall vacuum insulation keeps coffee hot for hours with a clean, sediment-free brew.",
    description:
      "Double-wall vacuum insulated French press that keeps coffee hot for hours. The four-level filtration system ensures a clean, sediment-free brew every time.",
    features: [
      "Double-wall vacuum insulation (2+ hours hot)",
      "Four-level stainless steel filtration",
      "34oz capacity for sharing",
      "Cool-touch exterior",
      "Dishwasher-safe components",
    ],
    benefits: [
      { title: "Stays hot", detail: "Vacuum walls hold temperature long after brewing." },
      { title: "Cleaner cup", detail: "Layered mesh keeps grounds out of your coffee." },
      { title: "Share-ready", detail: "Generous capacity serves the whole table." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-zinc-100 via-stone-100 to-stone-300",
  },
  {
    slug: "minimalist-ceramic-dinner-set",
    name: "Minimalist Ceramic Dinner Set (4pc)",
    category: "kitchen-dining",
    price: 89.99,
    compareAtPrice: 109.99,
    rating: 4.9,
    reviewCount: 156,
    shortDescription:
      "Hand-finished stoneware with a matte glaze for understated, modern hosting.",
    description:
      "A four-piece stoneware dinner set with a soft matte glaze and clean, contemporary lines. Designed to make everyday meals feel considered.",
    features: [
      "Premium reactive-glaze stoneware",
      "Set of 4 dinner plates",
      "Chip-resistant rolled edges",
      "Microwave and dishwasher safe",
      "Stackable for compact storage",
    ],
    benefits: [
      { title: "Quietly elegant", detail: "Matte neutrals let the food be the centerpiece." },
      { title: "Everyday durable", detail: "Reinforced edges stand up to daily use." },
      { title: "Space-smart", detail: "Designed to stack neatly in tight cabinets." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-stone-50 via-stone-100 to-stone-200",
    badge: "New",
  },
  {
    slug: "silicone-cooking-utensil-set",
    name: "Silicone Cooking Utensil Set (8pc)",
    category: "kitchen-dining",
    price: 34.99,
    rating: 4.5,
    reviewCount: 421,
    shortDescription:
      "Heat-resistant, non-scratch silicone tools with a solid weighted feel.",
    description:
      "An eight-piece set of heat-resistant silicone utensils with seamless construction and a weighted, balanced handle for a premium feel in hand.",
    features: [
      "Heat-resistant to 480°F",
      "Seamless one-piece, hygienic build",
      "Non-scratch on coated cookware",
      "Weighted, balanced handles",
      "Includes hanging storage loop",
    ],
    benefits: [
      { title: "Cookware-safe", detail: "Soft silicone protects nonstick and enamel surfaces." },
      { title: "Hygienic", detail: "Seamless molding leaves nowhere for grime to hide." },
      { title: "Heat-proof", detail: "Stir and sear without worrying about melting." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-neutral-100 via-stone-100 to-zinc-200",
  },
  {
    slug: "double-wall-espresso-cups",
    name: "Double-Wall Espresso Cups (Set of 4)",
    category: "kitchen-dining",
    price: 29.99,
    rating: 4.7,
    reviewCount: 203,
    shortDescription:
      "Borosilicate glass that keeps espresso hot while staying cool to the touch.",
    description:
      "A set of four double-wall borosilicate glass espresso cups. The insulating air gap keeps drinks hot while the exterior stays comfortable to hold.",
    features: [
      "Double-wall borosilicate glass",
      "Set of 4 (80ml each)",
      "Cool-touch insulating design",
      "Floating-liquid visual effect",
      "Dishwasher safe",
    ],
    benefits: [
      { title: "Comfortable hold", detail: "Air-gap walls stay cool against your fingers." },
      { title: "Keeps heat", detail: "Insulation preserves crema and temperature longer." },
      { title: "Striking on the table", detail: "The suspended-liquid look elevates service." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-slate-50 via-stone-100 to-slate-200",
  },

  // ----------------------- Home Organization -----------------------
  {
    slug: "modular-desktop-organizer-walnut",
    name: "Modular Desktop Organizer — Walnut",
    category: "home-organization",
    price: 54.99,
    rating: 4.8,
    reviewCount: 167,
    shortDescription:
      "Solid walnut trays that reconfigure to fit your desk and your day.",
    description:
      "A modular desktop organizer crafted from solid walnut. Mix and match trays and risers to create a layout that keeps essentials within reach and clutter out of sight.",
    features: [
      "Solid walnut construction",
      "Reconfigurable modular trays",
      "Felt-lined base protects surfaces",
      "Holds devices, stationery, and cables",
      "Hand-finished with natural oil",
    ],
    benefits: [
      { title: "Made for your desk", detail: "Rearrange modules to match how you actually work." },
      { title: "Warm materials", detail: "Real walnut brings warmth to a workspace." },
      { title: "Surface-safe", detail: "Felt lining guards against scratches." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-amber-100 via-orange-50 to-stone-300",
    badge: "Best Seller",
  },
  {
    slug: "stackable-linen-storage-bins",
    name: "Stackable Linen Storage Bins (Set of 3)",
    category: "home-organization",
    price: 42.99,
    rating: 4.6,
    reviewCount: 198,
    shortDescription:
      "Structured linen bins with a clean silhouette that stack and fold flat.",
    description:
      "A set of three structured linen storage bins with reinforced walls and leather pull tabs. They stack neatly and fold flat when not in use.",
    features: [
      "Set of 3 nesting sizes",
      "Structured, reinforced linen walls",
      "Genuine leather pull tabs",
      "Collapsible for flat storage",
      "Neutral, room-ready palette",
    ],
    benefits: [
      { title: "Holds its shape", detail: "Reinforced sides stay upright even when half-full." },
      { title: "Quietly premium", detail: "Linen and leather details read high-end on a shelf." },
      { title: "Packs away", detail: "Folds flat when you need the space back." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-stone-100 via-neutral-100 to-stone-200",
  },
  {
    slug: "magnetic-cable-management-tray",
    name: "Magnetic Cable Management Tray",
    category: "home-organization",
    price: 24.99,
    rating: 4.5,
    reviewCount: 276,
    shortDescription:
      "Under-desk tray with magnetic clips to keep cables and adapters hidden.",
    description:
      "A discreet under-desk tray with integrated magnetic clips. Routes power strips, adapters, and cables out of sight for a clean, floating-desk look.",
    features: [
      "Mounts under any desk",
      "Magnetic cable clips included",
      "Holds power strips and adapters",
      "Powder-coated steel frame",
      "Tool-free adhesive + screw options",
    ],
    benefits: [
      { title: "Invisible cables", detail: "Hide the tangle for a clean desk profile." },
      { title: "Flexible mounting", detail: "Adhesive or screw mount for any setup." },
      { title: "Sturdy", detail: "Steel frame supports heavy power bricks." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-zinc-100 via-neutral-100 to-zinc-300",
  },
  {
    slug: "floating-wall-shelf-matte-black",
    name: "Floating Wall Shelf — Matte Black",
    category: "home-organization",
    price: 37.99,
    rating: 4.7,
    reviewCount: 145,
    shortDescription:
      "Hidden-bracket shelf with a matte powder-coat for a seamless wall line.",
    description:
      "A floating wall shelf with concealed brackets and a matte black powder-coat finish. Creates a clean, architectural line on any wall.",
    features: [
      "Concealed mounting bracket",
      "Matte black powder-coat finish",
      "Holds up to 22 lbs",
      "Solid metal construction",
      "Complete mounting hardware included",
    ],
    benefits: [
      { title: "Seamless look", detail: "Hidden brackets make it appear to float." },
      { title: "Genuinely strong", detail: "Rated for books, plants, and decor alike." },
      { title: "Versatile finish", detail: "Matte black suits modern and minimal rooms." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-neutral-200 via-zinc-200 to-neutral-300",
  },
  {
    slug: "felt-drawer-dividers",
    name: "Felt Drawer Dividers (Set of 6)",
    category: "home-organization",
    price: 19.99,
    rating: 4.4,
    reviewCount: 312,
    shortDescription:
      "Adjustable felt dividers that section any drawer without tools.",
    description:
      "Six adjustable felt drawer dividers that section off any drawer to keep contents tidy. No tools or adhesive required.",
    features: [
      "Set of 6 adjustable dividers",
      "Premium dense felt",
      "Friction-fit, no tools needed",
      "Trim-to-fit any drawer depth",
      "Soft surface protects contents",
    ],
    benefits: [
      { title: "Instant order", detail: "Create custom compartments in seconds." },
      { title: "Fits anywhere", detail: "Trim to size for drawers of any depth." },
      { title: "Gentle", detail: "Soft felt protects jewelry, tools, and stationery." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-stone-100 via-stone-50 to-neutral-200",
  },
  {
    slug: "acrylic-display-riser-set",
    name: "Acrylic Display Riser Set",
    category: "home-organization",
    price: 27.99,
    rating: 4.6,
    reviewCount: 134,
    shortDescription:
      "Crystal-clear risers that add tiered height for shelves and vanities.",
    description:
      "A set of clear acrylic risers in graduated heights. Adds dimension to shelves, vanities, and display cabinets so every item gets its moment.",
    features: [
      "Set of 3 graduated heights",
      "Crystal-clear cast acrylic",
      "Polished, seamless edges",
      "Stable weighted base",
      "Versatile for retail or home display",
    ],
    benefits: [
      { title: "Adds dimension", detail: "Tiered heights make displays feel curated." },
      { title: "Disappears", detail: "Clear acrylic keeps focus on what you show." },
      { title: "Steady", detail: "Weighted bases resist tipping." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-sky-50 via-slate-50 to-slate-200",
  },

  // ----------------------- Travel & Outdoor -----------------------
  {
    slug: "insulated-stainless-steel-bottle",
    name: "Insulated Stainless Steel Bottle (32oz)",
    category: "travel-outdoor",
    price: 34.99,
    compareAtPrice: 44.99,
    rating: 4.9,
    reviewCount: 528,
    shortDescription:
      "Triple-insulated bottle that holds cold 24h and hot 12h, leak-proof.",
    description:
      "A 32oz triple-wall vacuum insulated bottle that keeps drinks cold for 24 hours and hot for 12. The leak-proof cap and durable powder coat are made for the trail and the commute alike.",
    features: [
      "Triple-wall vacuum insulation",
      "Cold 24h / hot 12h",
      "Leak-proof threaded cap",
      "Durable anti-slip powder coat",
      "Fits standard cup holders",
    ],
    benefits: [
      { title: "All-day temperature", detail: "Ice survives a full day in the sun." },
      { title: "Bag-safe", detail: "Leak-proof seal protects your gear." },
      { title: "Grippy + tough", detail: "Powder coat resists dings and slips." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-teal-50 via-slate-100 to-slate-300",
    badge: "Best Seller",
  },
  {
    slug: "hardshell-tech-organizer-case",
    name: "Hardshell Tech Organizer Case",
    category: "travel-outdoor",
    price: 44.99,
    rating: 4.7,
    reviewCount: 219,
    shortDescription:
      "Protective EVA shell with elastic loops for cables, chargers, and drives.",
    description:
      "A semi-rigid EVA hardshell case with custom elastic loops and mesh pockets to keep cables, chargers, and drives organized and protected in transit.",
    features: [
      "Semi-rigid EVA hardshell",
      "Custom elastic organization loops",
      "Zippered mesh pockets",
      "Water-resistant exterior",
      "Compact carry-on footprint",
    ],
    benefits: [
      { title: "Everything in place", detail: "Dedicated loops stop the cable tangle." },
      { title: "Protective", detail: "Hard shell guards delicate electronics." },
      { title: "Travel-ready", detail: "Slim profile slides into any bag." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-zinc-200 via-neutral-200 to-zinc-400",
  },
  {
    slug: "packable-daypack-ripstop-nylon",
    name: "Packable Daypack — Ripstop Nylon",
    category: "travel-outdoor",
    price: 59.99,
    rating: 4.6,
    reviewCount: 187,
    shortDescription:
      "20L daypack that folds into its own pocket yet carries like a real bag.",
    description:
      "A 20L packable daypack in tear-resistant ripstop nylon. It folds into its own pocket for storage, then opens into a structured, comfortable bag for day trips.",
    features: [
      "20L capacity, ~6oz weight",
      "Tear-resistant ripstop nylon",
      "Folds into integrated pocket",
      "Padded, breathable straps",
      "Water-resistant coating",
    ],
    benefits: [
      { title: "Always with you", detail: "Packs down small for spontaneous trips." },
      { title: "Carries comfortably", detail: "Padded straps handle a full load." },
      { title: "Weather-ready", detail: "Coated fabric shrugs off light rain." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-emerald-50 via-stone-100 to-stone-300",
  },
  {
    slug: "compression-packing-cubes",
    name: "Compression Packing Cubes (Set of 4)",
    category: "travel-outdoor",
    price: 32.99,
    rating: 4.8,
    reviewCount: 364,
    shortDescription:
      "Zip-to-compress cubes that shrink your packing and sort your suitcase.",
    description:
      "A four-piece set of compression packing cubes with a secondary zipper that shrinks contents to free up space and keep your suitcase organized.",
    features: [
      "Set of 4 graduated sizes",
      "Dual-zipper compression",
      "Breathable mesh tops",
      "Reinforced seams and handles",
      "Lightweight ripstop fabric",
    ],
    benefits: [
      { title: "Pack more", detail: "Compression zipper reclaims real suitcase space." },
      { title: "Stay sorted", detail: "A cube per category means no rummaging." },
      { title: "Durable", detail: "Reinforced seams survive heavy rotation." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-indigo-50 via-slate-100 to-slate-300",
    badge: "New",
  },
  {
    slug: "collapsible-silicone-travel-mug",
    name: "Collapsible Silicone Travel Mug",
    category: "travel-outdoor",
    price: 22.99,
    rating: 4.4,
    reviewCount: 241,
    shortDescription:
      "Food-grade silicone mug that collapses flat with a leak-proof lid.",
    description:
      "A collapsible food-grade silicone travel mug with a secure leak-proof lid. Folds down flat to slip into a bag or pocket when empty.",
    features: [
      "Food-grade silicone body",
      "Collapses to ~1.5in tall",
      "Leak-proof snap lid",
      "12oz capacity",
      "Dishwasher safe",
    ],
    benefits: [
      { title: "Packs flat", detail: "Collapses to almost nothing when empty." },
      { title: "Commuter-proof", detail: "Sealed lid keeps coffee in the cup." },
      { title: "Easy clean", detail: "Dishwasher safe for daily use." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-rose-50 via-stone-100 to-neutral-300",
  },
  {
    slug: "rfid-blocking-passport-wallet",
    name: "RFID-Blocking Passport Wallet",
    category: "travel-outdoor",
    price: 28.99,
    rating: 4.7,
    reviewCount: 298,
    shortDescription:
      "Vegan-leather travel wallet with RFID shielding for documents and cards.",
    description:
      "A slim vegan-leather travel wallet with built-in RFID-blocking lining. Organizes passport, cards, boarding passes, and a pen in one secure place.",
    features: [
      "RFID-blocking lining",
      "Premium vegan leather",
      "Slots for passport, cards, tickets",
      "Integrated pen loop",
      "Slim, pocket-friendly profile",
    ],
    benefits: [
      { title: "Protects your data", detail: "Shielded lining blocks wireless skimming." },
      { title: "Everything together", detail: "All travel documents in one organized place." },
      { title: "Refined feel", detail: "Soft-touch vegan leather looks the part." },
    ],
    amazonUrl: "https://www.amazon.com/stores/zevrian",
    accent: "from-stone-200 via-neutral-200 to-stone-400",
  },
];

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: CategorySlug): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedProducts(limit = 6): Product[] {
  // Surface badged items first, then fill by rating.
  const badged = products.filter((p) => p.badge);
  const rest = products
    .filter((p) => !p.badge)
    .sort((a, b) => b.rating - a.rating);
  return [...badged, ...rest].slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
