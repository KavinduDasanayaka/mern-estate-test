/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               //Check index.html file
    "./src/**/*.{js,ts,jsx,tsx}", //check all the file that have these extensions and(Turn tailwind Class to css)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}