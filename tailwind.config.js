/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#52B86E",
        secondary: "#F9F293",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        aleo: ["Aleo", "sans-serif"],
      },
      borderRadius: {
        lg_next: "10px",
      },
      backgroundImage: {
        primaryGradient_to_b: "linear-gradient(to bottom, #C1FF72, #60AB00)",
        secondaryGradient_to_b: "linear-gradient(to bottom, #CA00EB, #3B0044)",
      },
    },
  },
  plugins: [],
};
