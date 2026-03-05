/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        liberatiRed: "#AE1E22",
        mutedGray: "#A0A0A0",
        pureWhite: "#FFFFFF",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        liberati: "4px",
      },
    },
  },
  plugins: [],
};

