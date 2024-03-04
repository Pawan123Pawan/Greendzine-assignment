/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mygreen:"#36A546",
        mytext:"#36A546CC"
      },
      left:{
        18:"80px"
      }
    },
   
  },
  plugins: [],
}


