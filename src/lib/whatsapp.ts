// TODO: Find-replace all instances of 66XXXXXXXXX with real WhatsApp number before going live
export const WHATSAPP_NUMBER = '66XXXXXXXXX'

export function buildWhatsAppUrl(message: string, number = WHATSAPP_NUMBER): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}

// Pre-built messages for each CTA
export const WA_MESSAGES = {
  hero: "Hi! I found Jumanji Samui and I'd like help planning activities on Koh Samui.",
  navButton: "Hi, I found Jumanji Samui and I'd like help planning activities on Koh Samui.",
  howItWorks: "Hi! I'd like help planning activities on Koh Samui.",
  priceBeat: "Hi! I've seen a price for [activity] at [amount]. Can you beat it?",
  packageDeal:
    "Hi! I'd like help putting together a package. I have a few days on Koh Samui and I'm interested in doing a few different activities. Can you help?",
  floating: "Hi! I found Jumanji Samui and I have a question.",
} as const

export type WAMessageKey = keyof typeof WA_MESSAGES
