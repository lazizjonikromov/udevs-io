/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        primary: "#1b5bf7",
        dark: "#18191f",
        bgCard: "#f4f7ff",
        selectedCardBg: "#c6d6ff",
        darkBgCard: "#e0e8ff",
        secondary: "#464359",
        black: "#000000",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
});

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         light: "#ffffff",
//         primary: "#1b5bf7",
//         dark: "#18191f",
//         bgCard: "#f4f7ff",
//         selectedCardBg: "#c6d6ff",
//         darkBgCard: "#e0e8ff",
//         secondary: "#464359",
//         black: "#000000",
//       },
//       fontFamily: {
//         manrope: ["Manrope", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };
