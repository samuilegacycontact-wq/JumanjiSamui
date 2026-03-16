'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Category } from '@/lib/categories'

interface CategoryCardProps {
  category: Category
  onClick: () => void
  index: number
}

export function CategoryCard({ category, onClick, index }: CategoryCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      // Staggered reveal from parent container
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: shouldReduceMotion ? 0 : index * 0.07,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      // Hover lift
      whileHover={
        shouldReduceMotion
          ? {}
          : { y: -4, transition: { duration: 0.2, ease: 'easeOut' } }
      }
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`Find out more about ${category.name}`}
      className="
        relative overflow-hidden rounded-2xl cursor-pointer
        aspect-[3/4] flex flex-col justify-end
        group
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2
        border-2 border-transparent
        transition-colors duration-200
        hover:border-burnt-orange
      "
    >
      {/* TODO: Replace card background with real operator photo — /public/images/categories/[id].jpg */}
      {/* Atmospheric placeholder background */}
      <div
        className="absolute inset-0 grain"
        style={{ backgroundColor: category.imagePlaceholder }}
        aria-hidden="true"
      />

      {/* Subtle texture pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 70%, rgba(196,154,60,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(216,67,21,0.1) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom gradient for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(26,21,15,0.95) 0%, rgba(26,21,15,0.5) 45%, rgba(26,21,15,0.05) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Coming Soon badge */}
      {category.comingSoon && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-warm-gold text-near-black text-[10px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
      )}

      {/* Emoji / icon — top-left */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-2xl" role="img" aria-hidden="true">
          {category.emoji}
        </span>
      </div>

      {/* Card content — bottom */}
      <div className="relative z-10 p-5 space-y-1.5">
        {/* Price badge */}
        <div className="mb-3">
          <span className="bg-warm-gold/90 text-near-black text-xs font-sans font-bold px-2.5 py-1 rounded-full tracking-wide">
            from ฿{category.priceFrom.toLocaleString()}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-cream leading-tight">
          {category.name}
        </h3>
        <p className="font-sans text-sm text-cream/70 leading-snug">
          {category.descriptor}
        </p>

        {/* "Find out more" — fades in on hover */}
        <motion.p
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="font-sans text-sm font-semibold text-burnt-orange pt-1 group-hover:opacity-100 transition-opacity duration-200"
          aria-hidden="true"
        >
          Find out more →
        </motion.p>
      </div>
    </motion.article>
  )
}
