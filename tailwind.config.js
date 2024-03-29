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
      gray: {
        DEFAULT: "#404852",
        light: "#D2DCE8",
      },
      green: "#31BA96",
      red: "#DC3434",
      purple: "#B548C6",
      yellow: "#FF8700",
      white: "#FFFFFF",
    },
    fontFamily: {
      Lumanosimo: ["'Lumanosimo', cursive"],
      Poppins: ["'Poppins',sans-serif"],
    },

    fontSize: {
      xs: ["14px", "20px"],
      sm: ["13px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "20px"],
      xl: ["20px", "30px"],
      "2xl": ["25px", "35px"],
      "3xl": ["30px", "35px"],
      "4xl": ["40px", "50px"],
      "5xl": "3.052rem",
    },
    extend: {},
  },
  plugins: [],
};
