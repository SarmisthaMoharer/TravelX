/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark":"#0c147d",
        "primary-light":"#6fc8d6"
      }
    },
  },
  plugins: [],
}

