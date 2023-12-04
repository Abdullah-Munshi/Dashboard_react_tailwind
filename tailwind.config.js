/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCDF8F",
        secondary: "#F9F293",
      },
      fontSize: {
        xl_prev: "0.688rem",
        xs_next: "0.8125rem",
        base_next: "1.0625rem",
      },
      fontFamily: {
        khand: ["Khand", "sans-serif"],
        longshotRegular: ["longshotRegular", "sans-serif"],
      },
      backgroundImage: {
        one: "linear-gradient(116deg, rgba(35, 35, 32, 0.90) 16.5%, rgba(6, 6, 5, 0.90) 24.34%, rgba(49, 48, 46, 0.90) 48.24%, rgba(0, 0, 0, 0.90) 76.5%, rgba(31, 31, 29, 0.90) 83.9%)",
        "gradient-two":
          "linear-gradient(180deg, rgba(18, 52, 120, 0.9) 0%, rgba(5, 26, 71, 0.9) 100%)",
        "gradient-three": "linear-gradient(45deg, #F6BC18 0%, #ED1C24 100%)",
        "gradient-four": "linear-gradient(180deg, #194399 0%, #162553 100%)",
        "gradient-five": "linear-gradient(180deg, #DF7900 0%, #F6BC18 100%)",
        "gradient-six": "linear-gradient(180deg, #F6BC18 0%, #DF7900 100%)",
        "gradient-seven":
          "linear-gradient(180deg, rgba(8, 182, 221, 0.70) 0%, rgba(255, 255, 255, 0.70) 100%)",
        "gradient-eight": "linear-gradient(180deg, #243775 0%, #162553 100%)",
      },
      borderRadius: {
        lg_next: "10px",
        "2xl_next": "20px",
      },
      dropShadow: {
        btn: "10px 10px 30px rgba(0, 0, 0, 0.30)",
      },
      boxShadow: {
        one: "0px 10px 10px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
