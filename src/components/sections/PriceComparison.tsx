import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'
import { WhatsAppIcon } from '@/components/ui/WhatsAppLink'
import { WA_MESSAGES } from '@/lib/whatsapp'

const rows = [
  { activity: 'ATV 4H Jungle Explorer', direct: 4500, jumanji: 3800 },
  { activity: 'Island Boat Tour', direct: 1600, jumanji: 1350 },
  { activity: 'Thai Cooking Class', direct: 2200, jumanji: 1800 },
]

const totalDirect = rows.reduce((sum, r) => sum + r.direct, 0)
const totalJumanji = rows.reduce((sum, r) => sum + r.jumanji, 0)
const saving = totalDirect - totalJumanji

function formatBaht(n: number) {
  return `฿${n.toLocaleString()}`
}

export function PriceComparison() {
  return (
    <section
      id="pricing"
      className="bg-rich-brown py-24 md:py-32 px-5 md:px-8"
      aria-label="Price comparison"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <ScrollReveal className="mb-12 md:mb-16">
          <p className="label-tag text-warm-gold tracking-widest text-[11px] mb-4">
            PER PERSON · REAL NUMBERS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
            What a 3-activity trip actually costs
          </h2>
        </ScrollReveal>

        {/* Table */}
        <ScrollReveal delay={0.1} className="mb-10">
          <div className="overflow-x-auto -mx-5 md:mx-0">
            <table className="w-full min-w-[480px]" aria-label="Activity price comparison">
              <thead>
                <tr>
                  <th className="text-left font-sans text-xs tracking-widest uppercase text-cream/40 pb-4 pr-6 font-normal">
                    Activity
                  </th>
                  <th className="text-right font-sans text-xs tracking-widest uppercase text-cream/40 pb-4 pr-6 font-normal">
                    Book Direct
                  </th>
                  <th className="text-right font-sans text-xs tracking-widest uppercase text-warm-gold pb-4 font-normal">
                    Through Jumanji
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.activity} className={i < rows.length - 1 ? 'border-b border-cream/[0.07]' : ''}>
                    <td className="py-4 pr-6 font-sans text-sm md:text-base text-cream/80">
                      {row.activity}
                    </td>
                    <td className="py-4 pr-6 text-right">
                      <span className="font-sans text-sm md:text-base text-cream/35 line-through">
                        {formatBaht(row.direct)}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <span className="font-sans text-sm md:text-base font-semibold text-cream">
                        {formatBaht(row.jumanji)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-cream/20">
                  <td className="pt-5 font-sans text-sm font-bold text-cream uppercase tracking-wide">
                    Total per person
                  </td>
                  <td className="pt-5 text-right">
                    <span className="font-sans text-base text-cream/35 line-through">
                      {formatBaht(totalDirect)}
                    </span>
                  </td>
                  <td className="pt-5 text-right">
                    <span className="font-serif text-xl font-bold text-cream">
                      {formatBaht(totalJumanji)}
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </ScrollReveal>

        {/* Saving callout */}
        <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="bg-warm-gold text-near-black font-sans font-bold text-base px-5 py-2 rounded-full">
              {formatBaht(saving)} saved per person
            </span>
          </div>
          <p className="font-sans text-sm text-cream/50 max-w-xs">
            &ldquo;Think you can find better? Send us the price and we&rsquo;ll tell you honestly if we can
            beat it.&rdquo;
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.25}>
          <WhatsAppLink
            message={WA_MESSAGES.priceBeat}
            size="sm"
            variant="outline"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Test us on price
          </WhatsAppLink>
        </ScrollReveal>
      </div>
    </section>
  )
}
