// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: '#666f86',
        active: 'var(--color-active)',
        inactive: 'var(--color-inactive)',
        issued: 'var(--color-issued)',
        CTA: 'var(--color-CTA)',
        used: 'var(--color-used)',
        bgColor: 'var(--color-bgColor)',
        bgTableHeader: 'var(--color-bgTableHeader)',
        pink: 'var(--color-pink)',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}