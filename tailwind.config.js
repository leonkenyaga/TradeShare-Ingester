/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        TradeShareblue: '#0098FF',
        TradeSharegray: '#444444',
        TradeShareblack: '#252526',
      },
    },
  },
  plugins: [],
}

