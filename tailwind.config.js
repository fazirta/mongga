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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
