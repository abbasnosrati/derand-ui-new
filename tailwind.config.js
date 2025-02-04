/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shareTechMono: ["ShareTechMono"],
        quantico: ["Quantico"],
        lato: ["Lato"],
        montserrat: ["Montserrat"],
      },
      colors: {
        whiteColor: "#E3D8D8",
        exampleColor: "#EDD7FC",
        borderColor: "#e5e7eb4f",
      },
      animation: {
        borderSpin: "spin 5s linear infinite",
      },
      screens: {
        "above-lg": { min: "1024px" },
        "custom-lg": { max: "1179px", min: "1024px" },
        "above-1440": { min: "1441px" },
      },
    },
  },
  plugins: [],
};
