/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#101010",
      blue: {
        light: "#D2DCE8",
        DEFAULT: " #32A7E2",
      },
      gray: "#404852",
      green: "#31BA96",
      red: "#DC3434",
      purple: "#B548C6",
      yellow: "#FF8700",
    },
    fontFamily: {
      Lumanosimo: "'Lumanosimo', cursive",
      Poppins: "'Poppins',sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
