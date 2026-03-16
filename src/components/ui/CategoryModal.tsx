'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useCallback } from 'react'
import type { Category } from '@/lib/categories'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { WhatsAppIcon } from './WhatsAppLink'

interface CategoryModalProps {
  category: Category | null
  onClose: () => void
}

export function CategoryModal({ category, onClose }: CategoryModalProps) {
  const shouldReduceMotion = useReducedMotion()

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (category) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [category, handleKeyDown])

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 40,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.001 : 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      scale: shouldReduceMotion ? 1 : 0.97,
      transition: { duration: shouldReduceMotion ? 0.001 : 0.2, ease: 'easeIn' },
    },
  }

  const whatsappUrl = category
    ? buildWhatsAppUrl(category.whatsappMessage)
    : '#'

  const ctaLabel = category?.comingSoon
    ? 'Be the first to know — ask us on WhatsApp'
    : `Ask about ${category?.name ?? ''}`

  return (
    <AnimatePresence>
      {category && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-near-black/90 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16
              z-[90] overflow-auto
              bg-rich-brown rounded-3xl
              flex flex-col
              shadow-[0_24px_80px_rgba(0,0,0,0.7)]
            "
          >
            {/* Modal image header */}
            <div
              className="relative h-48 md:h-64 rounded-t-3xl overflow-hidden flex-shrink-0 grain"
              style={{ backgroundColor: category.imagePlaceholder }}
              aria-hidden="true"
            >
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(26,21,15,0.1) 0%, rgba(44,36,24,0.85) 100%)',
                }}
              />
              {/* Emoji large */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-30" aria-hidden="true">
                  {category.emoji}
                </span>
              </div>
              {/* Coming soon badge */}
              {category.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="bg-warm-gold text-near-black text-xs font-sans font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-10 space-y-8">
              {/* Header */}
              <div className="space-y-2">
                <span className="label-tag text-warm-gold tracking-widest">
                  {category.duration}
                </span>
                <h2
                  id="modal-title"
                  className="font-serif text-3xl md:text-4xl font-bold text-cream"
                >
                  {category.name}
                </h2>
                <p className="font-sans text-cream/70 text-base leading-relaxed max-w-2xl">
                  {category.description}
                </p>
              </div>

              {/* Price range */}
              <div className="bg-near-black/40 rounded-2xl p-5 space-y-1">
                <span className="label-tag text-warm-gold/70 text-[11px] tracking-widest">
                  Price range
                </span>
                <p className="font-serif text-2xl font-bold text-warm-gold">
                  {category.priceRange}
                </p>
                <p className="font-sans text-cream/50 text-sm">
                  Prices vary by operator and group size. Message us for an exact quote.
                </p>
              </div>

              {/* What's included */}
              <div className="space-y-3">
                <h3 className="font-sans text-sm font-semibold text-cream/60 tracking-widest uppercase">
                  Typically included
                </h3>
                <ul className="space-y-2">
                  {category.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-sans text-cream/85 text-sm"
                    >
                      <span className="mt-0.5 text-warm-gold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-3
                    bg-whatsapp-green text-white
                    font-sans font-semibold text-base
                    px-8 py-4 rounded-full
                    hover:bg-[#1fba57] transition-colors duration-200
                    min-h-[52px]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-green focus-visible:ring-offset-2 focus-visible:ring-offset-rich-brown
                  "
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {ctaLabel}
                </a>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="
                absolute top-4 right-4
                w-11 h-11 flex items-center justify-center
                bg-near-black/70 hover:bg-near-black
                text-cream rounded-full
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-rich-brown
              "
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
