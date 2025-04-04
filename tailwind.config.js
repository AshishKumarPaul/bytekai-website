/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03e9f4',
        secondary: '#00ff88',
        accent: '#ff00ff',
        dark: '#0A0A0A',
        light: '#FFFFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'btn-anim1': 'btn-anim1 1s linear infinite',
        'btn-anim2': 'btn-anim2 1s linear infinite',
        'btn-anim3': 'btn-anim3 1s linear infinite',
        'btn-anim4': 'btn-anim4 1s linear infinite',
      },
      keyframes: {
        'btn-anim1': {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
        'btn-anim2': {
          '0%': { top: '-100%' },
          '50%, 100%': { top: '100%' },
        },
        'btn-anim3': {
          '0%': { right: '-100%' },
          '50%, 100%': { right: '100%' },
        },
        'btn-anim4': {
          '0%': { bottom: '-100%' },
          '50%, 100%': { bottom: '100%' },
        },
      },
    },
  },
  plugins: [],
} 