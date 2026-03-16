import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/ui/WhatsAppLink'

export function PackageDealCTA() {
  return (
    <section
      id="packages"
      className="bg-burnt-orange py-24 md:py-32 px-5 md:px-8"
      aria-label="Package deals"
    >
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
            Doing more than one thing?
          </h2>
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-cream/90 mt-3">
            We&rsquo;ll build you a package.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-8">
          <p className="font-sans text-base md:text-lg text-cream/80 leading-relaxed max-w-xl mx-auto">
            Tell us how many days you have and what you&rsquo;re interested in. We&rsquo;ll put
            together a suggested plan with a total price — and because we&rsquo;re arranging
            multiple activities at once, we can usually get better rates than arranging each one
            separately.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25} className="mt-10 space-y-4 flex flex-col items-center">
          {/* Deliberately uses dark button, not WhatsApp green — signals a different type of action */}
          <a
            href={buildWhatsAppUrl(WA_MESSAGES.packageDeal)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-rich-brown text-cream
              font-sans font-semibold text-base md:text-lg
              px-9 py-4 rounded-full
              hover:bg-near-black transition-colors duration-200
              min-h-[52px]
              shadow-[0_4px_20px_rgba(26,21,15,0.4)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-burnt-orange
            "
          >
            <WhatsAppIcon className="w-5 h-5" />
            Build my package on WhatsApp
          </a>
          <p className="font-sans text-sm text-cream/60">
            Free. No commitment. We&rsquo;ll reply with options within a few hours.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
