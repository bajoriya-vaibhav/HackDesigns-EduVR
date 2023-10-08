/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      graphitelight:"#33363B",
      graphitedark:"#181A1C",
      cream:"#FAF6F1",
      sunlight:"#F6D09A",
      ginger:"#FBF4C9",
      peach:"#FBBDC1",
      mattpurple:"##c084fc",
      lemon:"#FECE3E",
      lime:"#BDCAC0",
      pink1:"#F4E2FF"
    }},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],
  },
}

