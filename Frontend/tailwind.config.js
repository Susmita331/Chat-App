import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // covers React/JS/TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
