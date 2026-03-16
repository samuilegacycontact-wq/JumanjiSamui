'use client'

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/ui/WhatsAppLink'

const navLinks = [
  { label: 'Tours', href: '#tours' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Jumanji', href: '#what-we-do' },
]

export function Nav() {
  const shouldReduceMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for nav background transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[60]"
        animate={{
          backgroundColor: scrolled ? '#2C2418' : 'rgba(0,0,0,0)',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.4)' : 'none',
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo / Wordmark */}
          {/* TODO: Insert logo image file — /public/logo.svg — currently rendering wordmark fallback */}
          <Link
            href="/"
            className="font-serif font-bold text-xl md:text-2xl tracking-widest text-cream hover:text-cream/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Jumanji Samui — home"
          >
            JUMANJI
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-cream/80 hover:text-cream tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop WhatsApp CTA */}
          <a
            href={buildWhatsAppUrl(WA_MESSAGES.navButton)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:inline-flex items-center gap-2
              bg-whatsapp-green text-white
              font-sans font-semibold text-sm
              px-5 py-2.5 rounded-full
              hover:bg-[#1fba57] transition-colors duration-200
              min-h-[44px]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-green focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
            "
          >
            <WhatsAppIcon className="w-4 h-4" />
            Message us
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="
              md:hidden w-11 h-11 flex flex-col items-center justify-center gap-[6px]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              rounded-lg
            "
          >
            <span
              className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{
              duration: shouldReduceMotion ? 0.001 : 0.35,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="
              fixed inset-0 z-[70]
              bg-rich-brown
              flex flex-col justify-between
              px-8 pt-24 pb-10
            "
          >
            {/* Links */}
            <nav aria-label="Mobile navigation">
              <ul className="space-y-2" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : i * 0.07 + 0.1,
                      duration: 0.35,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block font-serif text-4xl font-bold text-cream hover:text-burnt-orange transition-colors duration-150 py-2"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* WhatsApp CTA — large, prominent */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: 0.35 }}
              className="space-y-3"
            >
              <a
                href={buildWhatsAppUrl(WA_MESSAGES.navButton)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="
                  flex items-center justify-center gap-3
                  bg-whatsapp-green text-white
                  font-sans font-semibold text-lg
                  px-8 py-4 rounded-full
                  hover:bg-[#1fba57] transition-colors duration-200
                  min-h-[56px] w-full
                "
              >
                <WhatsAppIcon className="w-6 h-6" />
                Message us on WhatsApp
              </a>
              <p className="text-cream/40 text-xs font-sans text-center">
                No booking fees · Pay operators directly
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
