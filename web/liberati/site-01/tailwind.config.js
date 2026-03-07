/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gap: {
        block: "var(--block-gap)",
        "block-sm": "var(--block-gap-sm)",
        "block-md": "var(--block-gap-md)",
      },
      padding: {
        "block-x": "var(--block-pad-x)",
        "block-x-md": "var(--block-pad-x-md)",
        "block-y": "var(--block-pad-y)",
        "block-content-y": "var(--block-content-y)",
        "block-content-y-md": "var(--block-content-y-md)",
        "block-gallery-x": "var(--block-gallery-x)",
        "section-y": "var(--section-pad-y)",
        "page-x": "var(--page-pad-x)",
        "page-x-lg": "var(--page-pad-x-lg)",
      },
      colors: {
        obsidian: "#0A0A0A",
        liberatiRed: "#AE1E22",
        mutedGray: "#A0A0A0",
        pureWhite: "#FFFFFF",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        liberati: "4px",
      },
    },
  },
  plugins: [],
};

