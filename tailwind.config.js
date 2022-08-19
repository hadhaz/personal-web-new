/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        europa: ["Europa", "Sans-Serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      animation: {
        in: "in 500ms",
        out: "out 500ms",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        out: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      colors: {
        primary: "#f9f8f4",
        grayfont: "#757575",
        customYelllor: '#f8cd5f'
      },
      backgroundColor: {
        primary: "#f9f8f4",
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, rgba(249,248,244,1) 0%, rgba(249,248,244,1) 58%, rgba(255,255,255,1) 58%, rgba(255,255,255,1) 100%)",
        'hero-mobile': "linear-gradient(180deg, rgba(249,248,244,1) 0%, rgba(249,248,244,1) 49%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 100%)",
        'login':'linear-gradient(180deg, rgba(249,248,244,1) 0%, rgba(255,255,255,1) 100%)'
      },
    },
  },
  plugins: [],
};
