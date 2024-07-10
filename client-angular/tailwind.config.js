/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    "./src/**/*.{html,ts}", // Include all HTML and TypeScript files in the src directory
  ],
  purge: ["./src/**/*.{html,ts}"],
};
