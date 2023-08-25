/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :"class",
  theme: {
    extend: {
      spacing:{
          largescreen: '150vh',
          doublescreen: '200vh',
      },

      fontFamily:{
        Montserrat :['Montserrat'],
      }, 
      colors:{
        lightBg:"#f5f3ff",
        darkBg:"#111827",
        
      },
    },
  },
  plugins: [],
}