/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#0d0b09',
          deep: '#0c0907',
          mid: '#16110d',
          lift: '#201912',
        },
        amber: {
          DEFAULT: '#d4892a',
          light: '#e6a550',
          pale: '#f5dcaa',
        },
        cream: {
          DEFAULT: '#f5ede0',
          muted: '#c8b9a5',
          faint: '#8c7d6c',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'steam-rise': {
          '0%': { transform: 'scaleY(0.3) translateY(20px)', opacity: '0' },
          '35%': { opacity: '0.7' },
          '100%': { transform: 'scaleY(1) translateY(-10px)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'hero-in': {
          '0%': { opacity: '0', transform: 'translateY(40px)', filter: 'blur(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spring-in': {
          '0%': { opacity: '0', transform: 'scale(0.85) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'card-in': {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.8)' },
        },
      },
      animation: {
        'steam-rise': 'steam-rise 2.4s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'hero-in': 'hero-in 0.9s cubic-bezier(0.25,0.1,0.25,1) backwards',
        'fade-up': 'fade-up 0.7s ease-out backwards',
        'spring-in': 'spring-in 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.5s backwards',
        'card-in': 'card-in 0.5s ease-out backwards',
        'pulse-dot': 'pulse-dot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};