/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        black: "#000000",
        charcoal: "#202020",
        darkiron: "#181818",

        gold: "#FFC000",
        golddark: "#917300",

        white: "#FFFFFF",
        ash: "#7D7D7D",
        graphite: "#494949",
      },

      fontFamily: {
        lambo: [
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },

  plugins: [],
};