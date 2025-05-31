/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-orange": "#ff9900",
        "accent-orange-transparent": "#ff8c001c",
        "accent-orange-select": "#472e00",
        "background-left": "#0f172a",
        "background-right": "#0f1e47",
      },
      fontFamily: {
        figtree: ["Figtree", "Helvetica", "sans-serif"],
        inter: ["Inter", "Figtree", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
