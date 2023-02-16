/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      nw: '100vw',
      nh: '100vh',
      full: '576px',
    },
    maxWidth: {
      full: '576px',
    },
    extend: {
      colors: {
        primary: {
          dark: '#0B123B',
          lightdark: '#16257A',
          main: '#2238BA',
          bright: '#2D4CFA',
          light: '#4363E1',
        },
        secondary: {
          main: '#FACD4B',
          light: '#FAEFC5',
        },
        title: '#232323',
        caption: '#ababab',
        black: '#333333',
        white: '#fefefe',
        warn: '#C7A43C',
        error: '#C7473B',
        success: '#47C753',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl'), color: theme('colors.text.title') },
        h2: { fontSize: theme('fontSize.xl'), color: theme('colors.text.title') },
        h3: { fontSize: theme('fontSize.lg'), color: theme('colors.text.title') },
        p: { fontSize: theme('fontSize.base'), color: theme('colors.text.default') },
        caption: { fontSize: theme('fontSize.sm'), color: theme('colors.text.caption') },
      });
    }),
  ],
};
