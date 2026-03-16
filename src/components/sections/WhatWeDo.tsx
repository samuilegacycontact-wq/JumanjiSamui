'use client'

import { ScrollReveal, StaggerContainer, staggerItemVariants } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'

function PriceTagIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="#D84315" strokeWidth="1.5" />
      <path
        d="M12 20l8-8h8v8l-8 8-8-8z"
        stroke="#D84315"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="14" r="1.5" fill="#D84315" />
    </svg>
  )
}

function HandShakeIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="#D84315" strokeWidth="1.5" />
      <path
        d="M10 22l4-4 3 1 3-3 3 1 4-4"
        stroke="#D84315"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 26l10-10M30 18l-3 3-3-1-3 3"
        stroke="#D84315"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SingleContactIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="#D84315" strokeWidth="1.5" />
      <circle cx="20" cy="16" r="4" stroke="#D84315" strokeWidth="1.5" />
      <path
        d="M12 30c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="#D84315"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const features = [
  {
    icon: <PriceTagIcon />,
    title: 'We find the best price',
    body: 'We compare operators and get you rates below what they publish publicly',
  },
  {
    icon: <HandShakeIcon />,
    title: 'You pay nothing upfront',
    body: 'Cash to the operator on the day. Zero financial risk, zero deposit',
  },
  {
    icon: <SingleContactIcon />,
    title: 'One contact for everything',
    body: 'Instead of chasing six different WhatsApps, you message us once',
  },
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-cream py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-rich-brown leading-tight mb-10">
            &ldquo;Not a booking site. Not a tour operator.
            <br className="hidden md:block" />
            <span className="text-burnt-orange"> Just someone who knows the island.</span>&rdquo;
          </h2>
        </ScrollReveal>

        {/* Personal voice */}
        <ScrollReveal delay={0.1}>
          <p className="font-serif italic text-lg md:text-xl text-rich-brown/60 mb-10">
            &ldquo;I&rsquo;ve lived on Samui for years. I know every operator by name.&rdquo;
          </p>
        </ScrollReveal>

        {/* Body copy */}
        <ScrollReveal delay={0.15}>
          <div className="space-y-5 text-rich-brown/80 font-sans text-base md:text-lg leading-relaxed mb-16">
            <p>
              Most tour websites sell you a package, take a cut, and hand you a PDF.{' '}
              <strong className="text-rich-brown">That&rsquo;s not this.</strong>
            </p>
            <p>
              This is a personal concierge service — one contact on the island who knows every
              operator, every price, and every deal worth having. Tell us what you want. We source
              the best options, negotiate better rates than you&rsquo;d find yourself, and coordinate
              everything. You pay the operator directly on the day in cash. No prepayment. No card
              details. No risk.
            </p>
            <p>
              And if you want more than one activity? We bundle them.{' '}
              <strong className="text-rich-brown">
                The more you do through us, the more you save.
              </strong>
            </p>
          </div>
        </ScrollReveal>

        {/* Feature points */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          staggerDelay={0.12}
          amount={0.1}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItemVariants}
              className="space-y-3"
            >
              <div>{feature.icon}</div>
              <h3 className="font-serif text-xl font-bold text-rich-brown">{feature.title}</h3>
              <p className="font-sans text-sm md:text-base text-rich-brown/70 leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
