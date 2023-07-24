/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#374259",
        "secondary": "#CE7777",
      }
    },
    screens: {
    'xl': { 'max': '1279px' },

    'lg': { 'max': '1023px' },

    'md': { 'max': '1100px' },

    'sm': { 'max': '670px' },
  }  
  },
  plugins: [],
}
