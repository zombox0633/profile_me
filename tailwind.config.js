/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        grayTen: "#1a1a1a",
        darkGreen: "#042825",
        darkSlateGreen: "#244341",
        feldgrauGreen: "#435E5C",
        battleshipGray: "#728785",
        ashGray: "#A1AFAE",
        arsenic: "#3B444B",
        amber: "#FFBE0B",
      },
    },
  },
  plugins: [],
};
