import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        'rich-brown': '#2C2418',
        'burnt-orange': '#D84315',
        'warm-gold': '#C49A3C',
        'whatsapp-green': '#25D366',
        'warm-off-white': '#F0EAE0',
        'near-black': '#1A150F',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-once': 'pulse-once 2s ease-out 1',
      },
      keyframes: {
        'pulse-once': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37,211,102,0.7)' },
          '50%': { transform: 'scale(1.08)', boxShadow: '0 0 0 12px rgba(37,211,102,0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
