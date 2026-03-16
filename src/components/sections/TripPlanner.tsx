'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/ui/WhatsAppLink'

type StepId = 'group' | 'vibe' | 'days'

interface Step {
  id: StepId
  question: string
  options: string[]
}

const steps: Step[] = [
  {
    id: 'group',
    question: 'How would you describe your group?',
    options: ['Solo traveller', 'Couple', 'Group of friends', 'Family with kids'],
  },
  {
    id: 'vibe',
    question: "What kind of experience are you after?",
    options: ['Full adrenaline', 'Mix of adventure and relaxation', 'Pure relaxation', 'Surprise me'],
  },
  {
    id: 'days',
    question: 'How many days do you have on Samui?',
    options: ['1–2 days', '3–4 days', '5–7 days', 'More than a week'],
  },
]

function buildMessage(answers: Record<StepId, string>): string {
  return `Hi! I'm a ${answers.group} looking for a ${answers.vibe.toLowerCase()} experience. I have ${answers.days} on Koh Samui. Can you put together some suggestions?`
}

export function TripPlanner() {
  const shouldReduceMotion = useReducedMotion()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<Record<StepId, string>>>({})
  const [complete, setComplete] = useState(false)

  const handleSelect = (value: string) => {
    const step = steps[currentStep]
    const newAnswers = { ...answers, [step.id]: value }
    setAnswers(newAnswers)

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setComplete(true)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setAnswers({})
    setComplete(false)
  }

  const allAnswers = answers as Record<StepId, string>
  const waMessage = complete ? buildMessage(allAnswers) : ''

  const slideVariants = {
    enter: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 32,
    },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.001 : 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -32,
      transition: { duration: shouldReduceMotion ? 0.001 : 0.25, ease: 'easeIn' },
    },
  }

  return (
    <section id="planner" className="bg-warm-off-white py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p className="label-tag text-warm-gold/70 tracking-widest text-[11px] mb-4">
            NOT SURE WHERE TO START?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rich-brown mb-3">
            Answer three questions.
          </h2>
          <p className="font-sans text-base text-rich-brown/60">
            We&rsquo;ll build your personalised WhatsApp message — you just hit send.
          </p>
        </ScrollReveal>

        {/* Quiz card */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-3xl shadow-[0_4px_32px_rgba(44,36,24,0.1)] overflow-hidden">
            {/* Progress bar */}
            <div className="h-1 bg-warm-off-white">
              <motion.div
                className="h-full bg-burnt-orange"
                animate={{
                  width: complete
                    ? '100%'
                    : `${((currentStep) / steps.length) * 100}%`,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
              />
            </div>

            <div className="p-8 md:p-12">
              {/* Step dots */}
              {!complete && (
                <div className="flex items-center gap-2 mb-8" aria-label={`Step ${currentStep + 1} of ${steps.length}`}>
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentStep
                          ? 'w-6 h-2 bg-burnt-orange'
                          : i < currentStep
                          ? 'w-2 h-2 bg-burnt-orange/40'
                          : 'w-2 h-2 bg-rich-brown/15'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}

              <AnimatePresence mode="wait">
                {!complete ? (
                  <motion.div
                    key={`step-${currentStep}`}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-rich-brown mb-8">
                      {steps[currentStep].question}
                    </h3>
                    <ul className="space-y-3" role="list">
                      {steps[currentStep].options.map((option) => (
                        <li key={option}>
                          <button
                            onClick={() => handleSelect(option)}
                            className="
                              w-full text-left
                              font-sans text-base text-rich-brown
                              px-5 py-4 rounded-xl
                              border-2 border-rich-brown/10
                              hover:border-burnt-orange hover:bg-burnt-orange/[0.04]
                              active:scale-[0.99]
                              transition-all duration-150
                              min-h-[52px]
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2
                            "
                          >
                            {option}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="complete"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-8"
                  >
                    <div>
                      <p className="label-tag text-warm-gold tracking-widest text-[11px] mb-3">
                        YOUR MESSAGE IS READY
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-rich-brown">
                        Ready to send
                      </h3>
                    </div>

                    {/* Message preview — styled as a WhatsApp bubble */}
                    <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-none p-5 shadow-sm">
                      <p className="font-sans text-sm md:text-base text-[#1a150f] leading-relaxed">
                        {waMessage}
                      </p>
                      <p className="font-sans text-[10px] text-[#1a150f]/50 text-right mt-2">
                        You · via WhatsApp
                      </p>
                    </div>

                    <div className="space-y-4">
                      <a
                        href={buildWhatsAppUrl(waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center justify-center gap-3 w-full
                          bg-whatsapp-green text-white
                          font-sans font-semibold text-base
                          px-8 py-4 rounded-full
                          hover:bg-[#1fba57] transition-colors duration-200
                          min-h-[52px]
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-green focus-visible:ring-offset-2
                        "
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        Send this on WhatsApp →
                      </a>

                      <button
                        onClick={handleReset}
                        className="
                          w-full text-center
                          font-sans text-sm text-rich-brown/50
                          hover:text-rich-brown transition-colors duration-150
                          py-2
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rich-brown focus-visible:ring-offset-2
                        "
                      >
                        Start over
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
