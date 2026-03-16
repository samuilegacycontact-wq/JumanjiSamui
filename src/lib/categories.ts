export interface Category {
  id: string
  name: string
  descriptor: string
  emoji: string
  priceFrom: number
  priceRange: string
  duration: string
  included: string[]
  description: string
  whatsappMessage: string
  comingSoon?: boolean
  // TODO: Replace each card background with real operator photo — /public/images/categories/[id].jpg
  imagePlaceholder: string // atmospheric dark color for placeholder
}

export const categories: Category[] = [
  {
    id: "atv",
    name: "ATV & Quad Bikes",
    descriptor: "Jungle trails, waterfalls, and off-road adventure",
    emoji: "🏍️",
    priceFrom: 2800,
    priceRange: "฿2,800 – ฿9,200",
    duration: "2–4 hours",
    included: [
      "Hotel transfer",
      "Professional guide",
      "Safety equipment",
      "Refreshments",
    ],
    description:
      "Tear through Koh Samui's jungle on quad bikes and ATVs. Routes wind through dense forest, past hidden waterfalls, and across muddy river crossings. Suitable for all levels — guides adjust the pace and route to your group.",
    whatsappMessage:
      "Hi! I'm interested in ATV quad biking on Koh Samui. Can you tell me more and get me a price?",
    imagePlaceholder: "#1a120a",
  },
  {
    id: "boat",
    name: "Boat Tours & Island Hopping",
    descriptor: "Island hop, snorkel, swim, or charter a private boat",
    emoji: "⛵",
    priceFrom: 1350,
    priceRange: "฿1,350 – ฿7,000+",
    duration: "Half day or full day",
    included: [
      "Snorkel equipment",
      "Life jackets",
      "Experienced guide",
      "Lunch (on full-day tours)",
    ],
    description:
      "Explore the scattered islands around Koh Samui — Koh Tao, Koh Nang Yuan, Ang Thong Marine Park. From shared speedboat tours to private yacht charters, we find the right vessel for your group and budget.",
    whatsappMessage:
      "Hi! I'm interested in a boat tour or island hopping on Koh Samui. Can you help?",
    imagePlaceholder: "#0a1520",
  },
  {
    id: "cooking",
    name: "Cooking Classes",
    descriptor: "Farm-to-table Thai cooking in a hillside kitchen",
    emoji: "🍜",
    priceFrom: 1800,
    priceRange: "฿1,800 – ฿3,000",
    duration: "3–4 hours",
    included: [
      "Morning market visit (some classes)",
      "All ingredients",
      "Recipe booklet to take home",
      "The meal you cook",
    ],
    description:
      "Cook authentic Thai dishes in a proper kitchen on the hillside with jungle views. Classes cover Tom Kha, Pad Thai, green curry, mango sticky rice and more. Small groups, hands-on, run by local chefs who actually live on the island.",
    whatsappMessage:
      "Hi! I'd love to do a Thai cooking class on Koh Samui. What do you recommend?",
    imagePlaceholder: "#1a1008",
  },
  {
    id: "muaythai",
    name: "Muay Thai & Boxing",
    descriptor: "Train with real Thai champions at a proper gym",
    emoji: "🥊",
    priceFrom: 800,
    priceRange: "฿800 – ฿2,500",
    duration: "1–2 hours",
    included: [
      "Boxing gloves",
      "Hand wraps",
      "Trainer-led session",
      "Shower facilities",
    ],
    description:
      "Step into a real Muay Thai gym, not a tourist show. One-on-one or small group sessions with experienced trainers. Absolute beginners welcome — the focus is on technique, fitness, and a genuine experience, not sparring.",
    whatsappMessage:
      "Hi! I'm interested in a Muay Thai training session on Koh Samui. Can you sort something?",
    imagePlaceholder: "#180a0a",
  },
  {
    id: "diving",
    name: "Diving & Snorkelling",
    descriptor: "PADI courses, fun dives, and reef exploration",
    emoji: "🤿",
    priceFrom: 1200,
    priceRange: "฿1,200 – ฿8,000+",
    duration: "Half day to multi-day",
    included: [
      "All diving equipment",
      "Boat transfer to dive site",
      "Dive master or instructor",
      "PADI certification (full courses)",
    ],
    description:
      "The waters around Koh Tao — accessible from Samui — are some of Thailand's best for diving. Try a beginner discover dive, go for your PADI Open Water, or join experienced divers for fun dives on the reef. We find the right operator for your level.",
    whatsappMessage:
      "Hi! I'm interested in diving or snorkelling near Koh Samui. Can you help me find the right option?",
    imagePlaceholder: "#081418",
  },
  {
    id: "yoga",
    name: "Yoga & Wellness",
    descriptor: "Sunrise yoga, spa days, and wellness retreats",
    emoji: "🧘",
    priceFrom: 900,
    priceRange: "฿900 – ฿4,500",
    duration: "1–4 hours",
    included: [
      "Class or session",
      "Yoga mat",
      "Water",
      "Pool or spa access (select venues)",
    ],
    description:
      "From sunrise beach yoga to full-day spa retreats in the jungle, Koh Samui has an exceptional wellness scene. We find the right match — whether you want a single drop-in class or a multi-day programme.",
    whatsappMessage:
      "Hi! I'm looking for a yoga class or wellness experience on Koh Samui. What do you recommend?",
    imagePlaceholder: "#101a10",
  },
  {
    id: "elephant",
    name: "Elephant Sanctuary",
    descriptor: "Ethical encounters — feed, bathe, and walk with elephants",
    emoji: "🐘",
    priceFrom: 1500,
    priceRange: "฿1,500 – ฿2,800",
    duration: "Half day",
    included: [
      "Hotel transfer",
      "Experienced guide",
      "Elephant feeding and interaction",
      "Light meal",
    ],
    description:
      "Spend a morning at an ethical elephant sanctuary — no riding, no shows, no chains. Feed them, walk alongside them, learn their history. We only work with sanctuaries that have verifiable ethical practices. This is a genuine encounter, not a performance.",
    whatsappMessage:
      "Hi! I'd love to visit an elephant sanctuary on Koh Samui. Can you arrange this?",
    imagePlaceholder: "#12100a",
  },
  {
    id: "zipline",
    name: "Zipline & Adventure",
    descriptor: "Jungle canopy ziplines, rope courses, and full-day thrills",
    emoji: "🌿",
    priceFrom: 1200,
    priceRange: "฿1,200 – ฿2,500",
    duration: "2–4 hours",
    included: [
      "Full safety harness and equipment",
      "Guide throughout",
      "Multiple zipline runs",
      "Rope course elements (some venues)",
    ],
    description:
      "Fly through the rainforest canopy on Koh Samui's zipline courses. Multiple platforms, varying heights, and spectacular jungle views. Suitable for most fitness levels — the guides set up all safety equipment and brief you before you go.",
    whatsappMessage:
      "Hi! I'm interested in zipline or jungle adventure on Koh Samui. What are the options?",
    imagePlaceholder: "#0a1508",
  },
  {
    id: "fishing",
    name: "Fishing Trips",
    descriptor: "Deep sea fishing, spearfishing, and reef fishing for all levels",
    emoji: "🎣",
    priceFrom: 1400,
    priceRange: "฿1,400 – ฿14,000 (private boat)",
    duration: "Half day or full day",
    included: [
      "Boat",
      "All fishing equipment",
      "Bait",
      "Experienced guide",
    ],
    description:
      "Fish the reefs and deep water around Koh Samui. From shared group boats to fully-chartered private vessels for serious anglers. Whatever you catch, some operators will cook it for you on board.",
    whatsappMessage:
      "Hi! I want to go fishing on Koh Samui. Can you sort something for me?",
    imagePlaceholder: "#081018",
  },
  {
    id: "safari",
    name: "Safari & Wildlife",
    descriptor: "4x4 jungle tracks, hidden waterways, and wildlife spotting",
    emoji: "🦎",
    priceFrom: 1200,
    priceRange: "฿1,200 – ฿2,500",
    duration: "Half day or full day",
    included: [
      "4x4 or open vehicle",
      "Knowledgeable guide",
      "Water and refreshments",
      "Entry fees (where applicable)",
    ],
    description:
      "Explore the parts of Koh Samui most tourists never find. Jungle trails, hidden waterfalls, traditional villages, and wildlife. Our guides know the island intimately — this is not a coach tour, it is a proper exploration.",
    whatsappMessage:
      "Hi! I'm interested in a jungle safari on Koh Samui. What does it involve?",
    imagePlaceholder: "#101208",
  },
  {
    id: "watersports",
    name: "Water Sports",
    descriptor: "Jet ski, wakeboard, kayak, SUP, and parasailing",
    emoji: "🏄",
    priceFrom: 600,
    priceRange: "฿600 – ฿3,500",
    duration: "Per activity / hourly",
    included: [
      "All equipment",
      "Safety vest",
      "Instructor or supervision (where required)",
      "Insurance coverage",
    ],
    description:
      "The beaches of Koh Samui offer every water sport going. Jet skis, parasailing, wakeboarding, stand-up paddle boarding, kayaking. Pay by the activity or bundle several together for a beach session. We source the best-value, fully-insured operators.",
    whatsappMessage:
      "Hi! I'm interested in water sports on Koh Samui. What's available and what are the prices?",
    imagePlaceholder: "#081418",
  },
  {
    id: "cultural",
    name: "Cultural Tours & Temples",
    descriptor: "Sacred temples, local markets, and the real side of island life",
    emoji: "🛕",
    priceFrom: 800,
    priceRange: "฿800 – ฿2,000",
    duration: "Half day or full day",
    included: [
      "Guide",
      "Transport",
      "Temple entry",
      "Market visits",
    ],
    description:
      "Koh Samui has a deep cultural and spiritual life behind the beach bars. Ancient temples, floating markets, traditional Thai villages, and local ceremonies. This tour is being curated carefully — we only want to offer it once we have the right operator confirmed.",
    whatsappMessage:
      "Hi! I'm interested in cultural tours and temple visits on Koh Samui. Can you let me know when this is available?",
    comingSoon: true,
    imagePlaceholder: "#14100a",
    // TODO: Remove coming soon badge and update modal when cultural tour operator is confirmed
  },
]
