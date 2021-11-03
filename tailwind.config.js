// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // enabled: true,
    // content: ['./src/**/*.jsx', './src/**/*.css'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        'button': ['Georama'],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      borderColor: ['active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
