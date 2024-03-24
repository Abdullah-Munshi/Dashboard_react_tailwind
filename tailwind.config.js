/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C1FF72",
        secondary: "#F9F293",
        richBlack: "#01161E",
        gray: "#7B7B7B",
        lightGreen: "#B5E4CA",
        lightBlue: "#B1E5FC",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        primaryGradient_to_right: "linear-gradient(to right, #7DCCFF, #009CFF)",
      },
    },
  },
  plugins: [],
});
