/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Include your source HTML and JS files
    "node_modules/preline/dist/*.js", // Include Preline's JS for Tailwind CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("preline/plugin"), // Preline plugin for Tailwind CSS
  ],
};
