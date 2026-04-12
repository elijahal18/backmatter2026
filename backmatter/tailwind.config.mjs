/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        serif: ["var(--font-garamond)"],
        display: ["var(--font-playfair)"],
        alt: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
}