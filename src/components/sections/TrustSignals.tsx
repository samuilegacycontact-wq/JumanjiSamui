import { ScrollReveal } from '@/components/ui/ScrollReveal'

const signals = [
  'All operators independently licensed',
  'You pay them directly — not us',
  'No prepayment required',
  'Last-minute welcome',
  'English · Russian · French',
]

export function TrustSignals() {
  return (
    <section
      id="trust"
      className="bg-rich-brown py-10 md:py-14 px-5 md:px-8"
      aria-label="Trust signals"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          {/* Desktop: horizontal with dividers */}
          <ul
            className="hidden md:flex items-center justify-center flex-wrap gap-0"
            role="list"
          >
            {signals.map((signal, index) => (
              <li
                key={signal}
                className="flex items-center"
              >
                <span className="font-sans text-sm text-cream/80 px-6 flex items-center gap-2">
                  <span className="text-warm-gold text-base" aria-hidden="true">✓</span>
                  {signal}
                </span>
                {index < signals.length - 1 && (
                  <span
                    className="block w-px h-5 bg-cream/15 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Mobile: stacked, centred */}
          <ul
            className="flex md:hidden flex-col items-center gap-4"
            role="list"
          >
            {signals.map((signal) => (
              <li
                key={signal}
                className="font-sans text-sm text-cream/80 flex items-center gap-2"
              >
                <span className="text-warm-gold" aria-hidden="true">✓</span>
                {signal}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
