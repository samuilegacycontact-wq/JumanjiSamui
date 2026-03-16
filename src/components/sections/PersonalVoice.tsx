import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function PersonalVoice() {
  return (
    <section
      id="personal-voice"
      className="bg-rich-brown py-24 md:py-36 px-5 md:px-8"
      aria-label="Personal message"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/*
          TODO: If a photo is added later — /public/images/kane.jpg — show it as a circular crop,
          left-aligned, with text right. Until then, text-only centred layout.
        */}

        {/* Quote — slow fade, cinematic beat */}
        <ScrollReveal duration={1.1} amount={0.3}>
          <blockquote className="space-y-6">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream font-light leading-relaxed">
              &ldquo;I started this because tourists were getting ripped off
              <br className="hidden md:block" />
              and great operators weren&rsquo;t getting found.
            </p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream font-light leading-relaxed">
              I know this island. I know these people.
              <br className="hidden md:block" />
              Let me sort your trip.&rdquo;
            </p>
          </blockquote>

          <footer className="mt-10">
            <span className="label-tag text-warm-gold tracking-widest text-[11px]">
              — THE PERSON BEHIND JUMANJI
            </span>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  )
}
