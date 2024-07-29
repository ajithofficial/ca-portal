/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'cadarkblue': '#020079',
        'cablue': '#0013de',
        'cadeepdark': '#05014a'
      },
    },
  },
  plugins: [],
}

