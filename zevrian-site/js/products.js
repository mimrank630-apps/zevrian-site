/* Zevrian Product Data */

const products = [
  // Kitchen & Dining
  {
    id: "precision-pour-over-coffee-kettle",
    name: "Precision Pour-Over Coffee Kettle",
    price: 49.99,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    description: "Engineered with a gooseneck spout for precise water flow control. The built-in thermometer ensures your water is at the perfect temperature for pour-over extraction.",
    features: [
      "Gooseneck spout for precise pour control",
      "Built-in analog thermometer (160-212F)",
      "1.0L capacity in brushed stainless steel",
      "Ergonomic counterbalanced handle",
      "Compatible with all stovetop types including induction"
    ],
    rating: 4.8,
    reviewCount: 234
  },
  {
    id: "bamboo-magnetic-knife-block",
    name: "Bamboo Magnetic Knife Block",
    price: 64.99,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    description: "A sustainably sourced bamboo knife block with powerful embedded magnets. Keeps your blades visible, accessible, and safely stored without dulling edges.",
    features: [
      "Sustainably harvested Moso bamboo construction",
      "Extra-strong neodymium magnets hold up to 12 knives",
      "Double-sided design with angled display",
      "Non-slip silicone base for countertop stability",
      "Natural antimicrobial bamboo surface"
    ],
    rating: 4.7,
    reviewCount: 189
  },
  {
    id: "insulated-french-press",
    name: "Insulated French Press (34oz)",
    price: 39.99,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    description: "Double-wall vacuum insulated French press that keeps coffee hot for hours. The four-level filtration system ensures a clean, sediment-free brew every time.",
    features: [
      "Double-wall vacuum insulation keeps drinks hot 2+ hours",
      "Four-level stainless steel filtration system",
      "34oz (1 liter) capacity serves 4 cups",
      "Shatterproof 18/10 stainless steel construction",
      "Dishwasher safe for easy cleaning"
    ],
    rating: 4.9,
    reviewCount: 312
  },
  {
    id: "minimalist-ceramic-dinner-set",
    name: "Minimalist Ceramic Dinner Set (4pc)",
    price: 89.99,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    description: "Hand-finished ceramic dinner plates with an organic matte glaze. Each piece features subtle tonal variations that make every set unique.",
    features: [
      "Hand-finished matte glaze with organic texture",
      "Set includes 4 dinner plates (10.5 inch diameter)",
      "Chip-resistant reinforced stoneware",
      "Microwave and dishwasher safe",
      "Stackable design for efficient storage"
    ],
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: "silicone-cooking-utensil-set",
    name: "Silicone Cooking Utensil Set (8pc)",
    price: 34.99,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    description: "Premium food-grade silicone utensils with acacia wood handles. Heat resistant up to 480F and safe for all non-stick cookware surfaces.",
    features: [
      "BPA-free food-grade silicone heads",
      "Heat resistant up to 480F (250C)",
      "Natural acacia wood handles with hanging holes",
      "Set of 8: spatula, spoon, ladle, tongs, whisk, turner, slotted spoon, pasta server",
      "Non-scratch safe for all cookware surfaces"
    ],
    rating: 4.8,
    reviewCount: 278
  },
  {
    id: "double-wall-espresso-cups",
    name: "Double-Wall Espresso Cups (Set of 4)",
    price: 29.99,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    description: "Hand-blown borosilicate glass espresso cups with double-wall insulation. Creates a stunning floating liquid effect while keeping the exterior cool to touch.",
    features: [
      "Hand-blown borosilicate glass construction",
      "Double-wall insulation keeps exterior cool",
      "80ml capacity perfect for espresso and ristretto",
      "Thermal shock resistant (-20C to 150C)",
      "Set of 4 cups in gift-ready packaging"
    ],
    rating: 4.7,
    reviewCount: 203
  },
  // Home Organization
  {
    id: "modular-desktop-organizer-walnut",
    name: "Modular Desktop Organizer - Walnut",
    price: 54.99,
    category: "Home Organization",
    categorySlug: "home-organization",
    description: "Handcrafted from solid American walnut with a modular design that adapts to your workspace. Each compartment is precisely sized for common desk items.",
    features: [
      "Solid American walnut with hand-rubbed oil finish",
      "Modular 5-piece design reconfigures to your needs",
      "Felt-lined compartments protect devices and accessories",
      "Integrated cable routing channels",
      "Weighted base prevents sliding"
    ],
    rating: 4.8,
    reviewCount: 167
  },
  {
    id: "stackable-linen-storage-bins",
    name: "Stackable Linen Storage Bins (Set of 3)",
    price: 42.99,
    category: "Home Organization",
    categorySlug: "home-organization",
    description: "Premium linen-wrapped storage bins with reinforced frames that maintain their shape. Designed to stack securely and fit standard shelf dimensions.",
    features: [
      "Premium linen exterior with wipeable interior lining",
      "Reinforced steel frame maintains shape when empty",
      "Leather-wrapped handles for comfortable lifting",
      "Set of 3 graduated sizes (S, M, L)",
      "Collapsible flat for storage when not in use"
    ],
    rating: 4.7,
    reviewCount: 245
  },
  {
    id: "magnetic-cable-management-tray",
    name: "Magnetic Cable Management Tray",
    price: 24.99,
    category: "Home Organization",
    categorySlug: "home-organization",
    description: "An under-desk cable management solution with powerful magnets. Hides and organizes up to 6 cables while keeping them easily accessible when needed.",
    features: [
      "Strong rare-earth magnets for tool-free installation",
      "Holds and organizes up to 6 cables",
      "Powder-coated steel in matte black finish",
      "Ventilated design prevents cable overheating",
      "Compatible with desks up to 1.5 inches thick"
    ],
    rating: 4.6,
    reviewCount: 198
  },
  {
    id: "floating-wall-shelf-matte-black",
    name: "Floating Wall Shelf - Matte Black",
    price: 37.99,
    category: "Home Organization",
    categorySlug: "home-organization",
    description: "A minimalist floating shelf with hidden mounting hardware for a seamless look. Supports up to 30 lbs with a powder-coated steel construction.",
    features: [
      "Heavy-gauge steel with matte black powder coat",
      "Concealed mounting bracket for floating appearance",
      "Supports up to 30 lbs evenly distributed",
      "24 inches wide by 6 inches deep",
      "Includes all mounting hardware and level template"
    ],
    rating: 4.8,
    reviewCount: 221
  },
  {
    id: "felt-drawer-dividers",
    name: "Felt Drawer Dividers (Set of 6)",
    price: 19.99,
    category: "Home Organization",
    categorySlug: "home-organization",
    description: "Adjustable premium felt dividers that create custom compartments in any drawer. Spring-loaded ends grip securely without adhesives or tools.",
    features: [
      "3mm premium wool-blend felt construction",
      "Spring-loaded ends fit drawers 11-17 inches wide",
      "Set of 6 dividers for complete drawer customization",
      "No adhesive or tools required for installation",
      "Machine washable for easy maintenance"
    ],
    rating: 4.9,
    reviewCount: 334
  },
  {
    id: "acrylic-display-riser-set",
    name: "Acrylic Display Riser Set",
    price: 27.99,
    category: "Home Organization",
    categorySlug: "home-organization",
    description: "Crystal-clear acrylic risers that create tiered displays for collectibles, products, or decor. The set includes three graduated heights for visual depth.",
    features: [
      "Optical-grade clear acrylic (5mm thick)",
      "Set of 3 graduated heights (3, 5, 7 inches)",
      "Polished edges with no visible seams",
      "Non-slip rubber feet protect surfaces",
      "Each riser supports up to 15 lbs"
    ],
    rating: 4.5,
    reviewCount: 142
  },
  // Travel & Outdoor
  {
    id: "insulated-stainless-steel-bottle",
    name: "Insulated Stainless Steel Bottle (32oz)",
    price: 34.99,
    category: "Travel & Outdoor",
    categorySlug: "travel-outdoor",
    description: "Triple-wall vacuum insulated bottle that keeps drinks cold for 24 hours or hot for 12. The wide mouth fits ice cubes and makes cleaning effortless.",
    features: [
      "Triple-wall vacuum insulation technology",
      "Keeps cold 24hrs, hot 12hrs",
      "18/8 food-grade stainless steel interior",
      "Wide mouth for ice cubes and easy cleaning",
      "Leak-proof dual-lid system (sports cap + screw top)"
    ],
    rating: 4.9,
    reviewCount: 456
  },
  {
    id: "hardshell-tech-organizer-case",
    name: "Hardshell Tech Organizer Case",
    price: 44.99,
    category: "Travel & Outdoor",
    categorySlug: "travel-outdoor",
    description: "A semi-rigid EVA case designed to protect and organize your tech accessories during travel. Features elastic loops, mesh pockets, and padded compartments.",
    features: [
      "Semi-rigid EVA shell with water-resistant exterior",
      "Dual-layer design with elastic loops and mesh pockets",
      "Padded compartment fits portable chargers up to 20000mAh",
      "YKK zippers with dual-pull tabs",
      "Compact 9x6x3 inch dimensions fit any bag"
    ],
    rating: 4.7,
    reviewCount: 189
  },
  {
    id: "packable-daypack-ripstop-nylon",
    name: "Packable Daypack - Ripstop Nylon",
    price: 59.99,
    category: "Travel & Outdoor",
    categorySlug: "travel-outdoor",
    description: "An ultralight 20L daypack made from tear-resistant ripstop nylon that packs into its own pocket. Perfect for day hikes, city exploration, and as a backup travel bag.",
    features: [
      "Ultralight 40D ripstop nylon (weighs only 6.5oz)",
      "20L capacity with padded laptop sleeve",
      "Packs into built-in zippered pocket",
      "Water-resistant DWR coating",
      "Breathable mesh back panel and padded straps"
    ],
    rating: 4.8,
    reviewCount: 267
  },
  {
    id: "compression-packing-cubes",
    name: "Compression Packing Cubes (Set of 4)",
    price: 32.99,
    category: "Travel & Outdoor",
    categorySlug: "travel-outdoor",
    description: "Double-zipper compression cubes that reduce clothing volume by up to 60%. The see-through mesh panel makes identifying contents quick and easy.",
    features: [
      "Dual-zipper compression reduces volume by 60%",
      "Set of 4: 1 large, 2 medium, 1 small",
      "Ripstop nylon with reinforced stitching",
      "Mesh panel for quick content identification",
      "Laundry bag mode with waterproof lining on one side"
    ],
    rating: 4.8,
    reviewCount: 345
  },
  {
    id: "collapsible-silicone-travel-mug",
    name: "Collapsible Silicone Travel Mug",
    price: 22.99,
    category: "Travel & Outdoor",
    categorySlug: "travel-outdoor",
    description: "A food-grade silicone mug that collapses to just 2 inches tall. Leak-proof lid and heat-resistant grip make it perfect for coffee on the go.",
    features: [
      "Collapses from 5 inches to 2 inches flat",
      "Food-grade platinum silicone (BPA-free)",
      "Leak-proof snap lid with drinking hole",
      "12oz capacity with measurement markings",
      "Heat resistant up to 230C, dishwasher safe"
    ],
    rating: 4.6,
    reviewCount: 178
  },
  {
    id: "rfid-blocking-passport-wallet",
    name: "RFID-Blocking Passport Wallet",
    price: 28.99,
    category: "Travel & Outdoor",
    categorySlug: "travel-outdoor",
    description: "A slim passport holder with built-in RFID-blocking technology. Holds passport, boarding passes, cards, and cash in an organized, pickpocket-resistant design.",
    features: [
      "Military-grade RFID/NFC blocking technology",
      "Full-grain leather exterior with microfiber lining",
      "Holds passport, 4 cards, boarding pass, and cash",
      "Slim profile (0.4 inches) fits front pockets",
      "Pen loop and SIM card slot for travel essentials"
    ],
    rating: 4.7,
    reviewCount: 223
  }
];

// Make products available globally
if (typeof window !== 'undefined') {
  window.zevProducts = products;
}
