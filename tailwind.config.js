/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
         manrope: ['Manrope', 'sans-serif'],
         caveat: ['Caveat', 'cursive'],
        
      },
      colors: {
        custom: '#F9F5F4',
      },
    },
  },
  plugins: [],
}

