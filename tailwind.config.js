/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        heightDefault: "60vh",
      },
      colors: {
        white: "#fefbfb",
        dark10: "#06090f",
        dark20: "#1b2838",
        dark30: "#151b26",
        dark40: "#a3a3a3",
        support01: "#2962ff",
        support02: "#ffce52",
        error: "#f03d3d",
        succes: "#0bb07b",
      },
    },
  },
  plugins: [],
};
