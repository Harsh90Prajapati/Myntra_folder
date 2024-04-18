/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        move:'move 3s ease-in-out infinite'
      },
      keyframes:{
        move:{
          '0%':{ "margin-left" :'-100px'},
        }
      }
    },
  },
  plugins: [],
}

