/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rainbow:
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
        "rainbow-full":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)",
        "linear-black":
          "linear-gradient(45deg, rgba(17,17,17,1) 0%, rgba(67,67,67,1) 35%);",
      },
    },
    screens: {
      tablet: { min: "450px", max: "900px" },
      hp: { min: "240px", max: "400px" },
      "hp-large": { min: "400px", max: "450px" },
      dekstop: { min: "900px" },
      mini: { max: "320px" },
      "super-mini": { min: "0px", max: "240px" },
    },
  },
  plugins: [],
};
