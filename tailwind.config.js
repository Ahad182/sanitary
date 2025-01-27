/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      Crimson : ["Crimson"],
     },
     fontSize:{
      yanna : "30px"
     },
     fontWeight:{
      mybold : "900"
     }
    },
  },
  plugins: [],
}