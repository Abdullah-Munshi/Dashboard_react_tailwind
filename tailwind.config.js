/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C1FF72",
        secondary: "#F9F293",
      },
      fontFamily: {
        sans: ["Montserrat Alternates", "sans-serif"],
        russoOne: ["Russo One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
