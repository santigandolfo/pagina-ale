/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#666666',
        accent: '#d4af37',
        'accent-dark': '#b8941f',
        'bg-light': '#fafafa',
        'text-light': '#888888',
        'border-light': '#e0e0e0',
        // Mondrian colors
        'mondrian-red': '#DC143C',
        'mondrian-blue': '#0047AB',
        'mondrian-yellow': '#FFD700',
        'mondrian-white': '#FFFFFF',
        'mondrian-black': '#000000',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'elegant-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'mondrian': '8px 8px 0 #000000',
      }
    },
  },
  plugins: [],
}
