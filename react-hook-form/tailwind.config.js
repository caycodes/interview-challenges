/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '547px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
    },
    extend: {
      colors: {
        black: {
          0: "#000000"
        }
      }
    },
  },
  plugins: [],
}