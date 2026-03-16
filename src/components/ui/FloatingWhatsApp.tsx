'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { buildWhatsAppUrl, WA_MESSAGES } from '@/lib/whatsapp'
import { WhatsAppIcon } from './WhatsAppLink'
import { useState } from 'react'

export function FloatingWhatsApp() {
  const shouldReduceMotion = useReducedMotion()
  const [tooltipVisible, setTooltipVisible] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: tooltipVisible ? 1 : 0, x: tooltipVisible ? 0 : 8 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none bg-rich-brown text-cream text-xs font-sans font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg"
        aria-hidden="true"
      >
        Message us on WhatsApp
      </motion.span>

      {/* Button */}
      <motion.a
        href={buildWhatsAppUrl(WA_MESSAGES.floating)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        onFocus={() => setTooltipVisible(true)}
        onBlur={() => setTooltipVisible(false)}
        // Pulse animation on first load — once only — then static
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 0.8, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? { scale: 1 }
            : {
                scale: [0.8, 1.1, 1, 1.06, 1],
                opacity: [0, 1, 1, 1, 1],
              }
        }
        transition={{
          duration: shouldReduceMotion ? 0 : 1.6,
          delay: shouldReduceMotion ? 0 : 2,
          times: [0, 0.3, 0.5, 0.7, 1],
          ease: 'easeOut',
        }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        className="
          w-14 h-14 md:w-14 md:h-14
          flex items-center justify-center
          bg-whatsapp-green rounded-full
          shadow-[0_4px_20px_rgba(37,211,102,0.45)]
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp-green focus-visible:ring-offset-2
          transition-shadow duration-200
          hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)]
        "
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  )
}
