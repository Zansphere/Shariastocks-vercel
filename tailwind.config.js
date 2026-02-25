// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Make sure this line is here if you're using Vite
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // <-- THIS IS THE ONLY LINE YOU NEED TO ADD
  ],
}