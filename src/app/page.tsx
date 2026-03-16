import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { PersonalVoice } from '@/components/sections/PersonalVoice'
import { PriceComparison } from '@/components/sections/PriceComparison'
import { TourCategories } from '@/components/sections/TourCategories'
import { PackageDealCTA } from '@/components/sections/PackageDealCTA'
import { TripPlanner } from '@/components/sections/TripPlanner'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        {/* Section 1 */}
        <Hero />

        {/* Section 2 */}
        <WhatWeDo />

        {/* Section 3 */}
        <HowItWorks />

        {/* Section 4 — Personal voice interstitial */}
        <PersonalVoice />

        {/* Section 5 — Price comparison (flows from dark block) */}
        <PriceComparison />

        {/* Section 6 — Tour categories grid */}
        <TourCategories />

        {/* Section 7 — Package deal CTA */}
        <PackageDealCTA />

        {/* Section 8 — Interactive trip planner */}
        <TripPlanner />

        {/* Section 9 — Trust signals */}
        <TrustSignals />
      </main>

      <Footer />

      {/* Always-visible floating WhatsApp button */}
      <FloatingWhatsApp />
    </>
  )
}
