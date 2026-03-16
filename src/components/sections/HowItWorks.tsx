'use client'

import { ScrollReveal, StaggerContainer, staggerItemVariants } from '@/components/ui/ScrollReveal'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'
import { WhatsAppIcon } from '@/components/ui/WhatsAppLink'
import { WA_MESSAGES } from '@/lib/whatsapp'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Tell us what you want',
    body: "Message us on WhatsApp. Who's coming, how many days, what you're after — adrenaline, relaxation, family, romance. We work with all of it.",
  },
  {
    number: '02',
    title: 'We handle everything',
    body: "We match you to the right operators, negotiate the rates, and build your plan. Multiple activities? We'll put a package together that's cheaper than arranging each one separately.",
  },
  {
    number: '03',
    title: 'Show up and enjoy',
    body: "We connect you to the operator. You pay them directly in cash on the day. No prepayment. No fees. No paperwork. If anything changes, we sort it.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-warm-off-white py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section label + heading */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <p className="label-tag text-warm-gold/80 tracking-widest mb-4">HOW IT WORKS</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-rich-brown">
            Three steps, then you&rsquo;re sorted
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20"
          staggerDelay={0.15}
          amount={0.1}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItemVariants}
              className="relative"
            >
              {/* Connector line — desktop only */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(100%+24px)] right-0 h-[1px] bg-rich-brown/15"
                  style={{ width: 'calc(100% - 48px)' }}
                  aria-hidden="true"
                />
              )}

              <div className="space-y-4">
                {/* Step number */}
                <span className="font-serif text-5xl md:text-6xl font-bold text-burnt-orange/25 leading-none select-none">
                  {step.number}
                </span>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-rich-brown">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base text-rich-brown/70 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal className="flex flex-col items-center gap-3">
          <WhatsAppLink message={WA_MESSAGES.howItWorks} size="lg">
            <WhatsAppIcon className="w-5 h-5" />
            Get started on WhatsApp
          </WhatsAppLink>
          <p className="font-sans text-sm text-rich-brown/50">
            We typically reply within a few hours
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
