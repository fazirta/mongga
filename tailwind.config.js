module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'barlow': ['"Barlow"', 'sans-serif'],
      'poppins': ['"Poppins"', 'sans-serif'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'darkgreen': '#093334',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
