/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primarySoftOrange: "hsl(35, 77%, 62%)",
        primarySoftRed: "hsl(5, 85%, 63%)",
        neutralOffWhite: "hsl(36, 100%, 99%)",
        neutralGrayishBlue: "hsl(233, 8%, 79%)",
        neutralDarkGrayishBlue: "hsl(236, 13%, 42%)",
        neutralVeryDarkBlue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};