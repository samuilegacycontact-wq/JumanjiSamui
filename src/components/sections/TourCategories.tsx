'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CategoryCard } from '@/components/ui/CategoryCard'
import { CategoryModal } from '@/components/ui/CategoryModal'
import { categories, type Category } from '@/lib/categories'

export function TourCategories() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  return (
    <section id="tours" className="bg-cream py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <ScrollReveal className="text-center mb-4">
          <p className="label-tag text-warm-gold/70 tracking-widest text-[11px] mb-4">
            KOH SAMUI ACTIVITIES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-rich-brown">
            Everything Koh Samui has to offer
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="text-center mb-12 md:mb-16">
          <p className="font-sans text-base text-rich-brown/60">
            Tap any category to find out more
          </p>
        </ScrollReveal>

        {/* Grid */}
        {/*
          TODO: Replace each card background with real operator photos — /public/images/categories/[id].jpg
          IDs: atv, boat, cooking, muaythai, diving, yoga, elephant, zipline, fishing, safari, watersports, cultural
        */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal — rendered outside grid to avoid stacking context issues */}
      <CategoryModal
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </section>
  )
}
