/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
