module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgreen: "#093334",
        palegreen: "#4B6969",
        maingreen: "#5B7D56",
        monggagrey: "#D2D8CE",
        mainyellow: "#FFBF2B",
      },
      width: {
        132: "33rem",
      },
      zIndex: {
        "-10": "-10",
        "-100": "-100",
      },
    },
    fontFamily: {
      barlow: ['"Barlow"', "sans-serif"],
      poppins: ['"Poppins"', "sans-serif"],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '1.5rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
