/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      maxWidth: {
        1500: "1500px",
      },
    },
  },
  plugins: [],
}
