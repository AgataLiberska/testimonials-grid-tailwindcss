module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: '#733FC8',
          light: '#A775F1'
        },
        grey: {
          dark: '#19202D',
          medium: '#48556A',
          light: '#ECF2F8'
        }
      },
      fontFamily: {
        'barlow': '"Barlow Semi Condensed", sans-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
