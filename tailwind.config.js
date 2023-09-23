/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
     white: '#fff',
     light: '#E5CAFD',
     pink: '#FA7BC4',
     purple: '#624A8E',
     dark2: '#331D5F',
     dark1: '#141639',
    },
    fontFamily: {
      'display': ['Purple Purse'],
      'body': ['Modern Antiqua'],
    }
   },
  plugins: [],
}