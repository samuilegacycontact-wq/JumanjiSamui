'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/ui/WhatsAppLink'

const taglines = [
  { text: 'We listen.', key: 'listen' },
  { text: 'We source.', key: 'source' },
  { text: 'We discount.', key: 'discount' },
]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: shouldReduceMotion ? 0 : 0.4,
      },
    },
  }

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.001 : 0.85,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.001 : 0.7,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : 1.8,
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      aria-label="Hero"
    >
      {/* Atmospheric dark background — visible before video loads */}
      <div className="absolute inset-0 bg-near-black grain" aria-hidden="true" />

      {/* Subtle warm radial glow — purely atmospheric */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 70%, rgba(196,154,60,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/*
        TODO: Replace video src with real hero video file — /public/video/hero.mp4
        TODO: Add poster image — /public/video/hero-poster.jpg
        Video content: small boy beneath banyan tree → Koh Samui adventures montage
      */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
        preload="none"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(26,21,15,0.3) 0%, rgba(26,21,15,0.6) 55%, rgba(26,21,15,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content — vertically centred, slightly below midpoint */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center px-5 max-w-5xl mx-auto pt-20 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Line 1: location label */}
            <motion.p
              variants={lineVariants}
              className="font-sans text-xs md:text-sm tracking-widest uppercase text-warm-gold mb-5 md:mb-8"
            >
              KOH SAMUI · THAILAND
            </motion.p>

            {/* Line 2: brand name */}
            <motion.h1
              variants={lineVariants}
              className="font-serif font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[100px] text-cream tracking-widest leading-none"
            >
              JUMANJI SAMUI
            </motion.h1>

            {/* Lines 3–6: taglines */}
            <div className="mt-8 md:mt-10 space-y-1 md:space-y-2">
              {taglines.map(({ text, key }) => (
                <motion.p
                  key={key}
                  variants={lineVariants}
                  className="font-serif font-light text-2xl sm:text-3xl md:text-4xl text-cream"
                >
                  {text}
                </motion.p>
              ))}
              <motion.p
                variants={lineVariants}
                className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-burnt-orange"
              >
                Seamless.
              </motion.p>
            </div>
          </motion.div>

          {/* CTA — enters after all taglines have landed */}
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 md:mt-14 space-y-4 flex flex-col items-center"
          >
            <a
              href={buildWhatsAppUrl(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                bg-whatsapp-green text-white
                font-sans font-semibold text-base md:text-lg
                px-8 py-4 rounded-full
                hover:bg-[#1fba57] transition-colors duration-200
                min-h-[52px]
                shadow-[0_4px_24px_rgba(37,211,102,0.4)]
                hover:shadow-[0_6px_32px_rgba(37,211,102,0.55)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-green focus-visible:ring-offset-2 focus-visible:ring-offset-near-black
              "
            >
              <WhatsAppIcon className="w-5 h-5" />
              Plan my trip on WhatsApp
            </a>
            <p className="font-sans text-sm text-cream/50">
              No booking fees · Pay operators directly · Last-minute welcome
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="relative z-10 flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="font-sans text-[10px] tracking-widest uppercase text-cream/30">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-cream/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
