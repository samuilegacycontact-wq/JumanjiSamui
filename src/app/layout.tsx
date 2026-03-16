import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jumanji Samui — Personal Concierge for Koh Samui Activities',
  description:
    "Not a booking site. Not a tour operator. Just someone who knows the island. We source the best activities on Koh Samui, negotiate better rates, and coordinate everything. You pay operators directly — no prepayment, no risk.",
  keywords:
    'Koh Samui activities, Samui tours, ATV Samui, boat tours Samui, Thai cooking class, Muay Thai Samui, elephant sanctuary Samui, concierge Samui',
  openGraph: {
    title: 'Jumanji Samui — Personal Concierge',
    description: 'We listen. We source. We discount. Seamless.',
    url: 'https://jumanjisamui.com',
    siteName: 'Jumanji Samui',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  // TODO: Add /public/og-image.jpg for Open Graph image (1200×630)
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-cream text-rich-brown antialiased">
        {children}
      </body>
    </html>
  )
}
