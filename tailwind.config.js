/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "#1111",
          50: "#1111",
        },
      },
    },
  },
  plugins: [],
};
