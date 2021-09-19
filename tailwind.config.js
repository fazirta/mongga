module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkgreen': '#093334',
        'palegreen': '#4B6969',
      },
      width: {
        '132': '33rem',
      },
    },
    fontFamily: {
      'barlow': ['"Barlow"', 'sans-serif'],
      'poppins': ['"Poppins"', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
