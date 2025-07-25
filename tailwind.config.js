/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mondrian-red': 'var(--mondrian-red)',
        'mondrian-blue': 'var(--mondrian-blue)',
        'mondrian-yellow': 'var(--mondrian-yellow)',
        'mondrian-black': 'var(--mondrian-black)',
        'mondrian-white': 'var(--mondrian-white)',
      },
    },
  },
  plugins: [],
}
