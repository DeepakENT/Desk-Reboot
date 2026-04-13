/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softbg: "#F5F2ED",
        softtext: "#4B4B4B",
        softgold: "#B89B5E",
      },
    },
  },
  plugins: [],
};

