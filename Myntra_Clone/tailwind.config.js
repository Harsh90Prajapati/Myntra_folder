/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        move:'move 1s ease-in-out infinite alternate'
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

