/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8892B",
        secondary: "#40C5E6",
        orange: "#F8892B",
      },
      fontSize: {
        xl_prev: "0.688rem",
        xs_next: "0.8125rem",
        base_next: "1.0625rem",
      },
      fontFamily: {
        oxanium: ["Oxanium", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        euphoriaScript: ["Euphoria Script", "cursive"],
      },
      backgroundImage: {
        one: "linear-gradient(180deg, rgba(14, 5, 64, 0.63) 0%, rgba(20, 15, 46, 0.33) 47.66%, rgba(26, 26, 26, 0.00) 100%)",
        two: "linear-gradient(180deg, #0D3279 0%, rgba(16, 9, 44, 0.01) 100%)",
        three:
          "linear-gradient(180deg, #0D3279 0%, rgba(17, 17, 16, 0.79) 100%)",
        four: "linear-gradient(180deg, #CE0707 0%, rgba(122, 9, 9, 0.55) 56.87%)",
      },
      borderRadius: {
        lg_next: "10px",
        "2xl_next": "20px",
      },
      boxShadow: {
        one: "0px 0px 174px 0px rgba(254, 255, 254, 0.90), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
