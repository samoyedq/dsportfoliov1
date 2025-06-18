/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
 theme: {
    extend: {
      screens: {
        'md': '968px', // Change medium breakpoint to 960px
      },
    },
  },
  plugins: [],
}