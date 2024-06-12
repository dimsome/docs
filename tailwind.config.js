/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.tsx'
  ],
  theme: {
    extend: {
      colors: {
        magic: {
          purple: "#7132F5",
          'semi-deep-purple': '#855BFB',
          'deep-purple': "#2B1463",
          black: "#101114",
          white: "#F0EFFF",
          'soft-pink': "#F7D2FE",
        },
        'ink-grey': {
          100: '#F3F4F6',
          400: '#6B7280',
          700: '#374151',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}