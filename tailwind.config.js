/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      tema1: ["Roboto Slab", "serif"],
      tema2: ["Roboto Mono", "monospace"],
      tema3: ["Poetsen One", "sans-serif"],
    },
  },
  plugins: [],
};
