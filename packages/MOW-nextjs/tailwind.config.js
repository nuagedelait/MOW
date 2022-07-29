/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      green: {
        100: '#A9C2A4',
        200: '#92B28B',
        300: '#7BA273',
        400: '#678D5E',
        500: '#55754e',
        600: '#3D5338',
        700: '#243221',
        800: '#0C100B',
        900: '#070906',
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.1em',
      wider: '.2em',
      widest: '.5em',
    },
    fontFamily: {
      'playfair': ['"Playfair Display"', 'serif'],
      'instaquote': ['"instaquote_regular"', 'script'],
      'quicksand' : ['Quicksand', 'sans']
    }
  },
  safelist: [
    'opacity-10',
    'opacity-20',
    'opacity-30',
    'opacity-40',
    'opacity-50',
    'opacity-60',
    'opacity-70',
    'opacity-80',
    'opacity-90',
    'opacity-100'
  ],
  plugins: [],
}
