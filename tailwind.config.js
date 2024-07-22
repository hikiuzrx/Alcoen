/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        main: ["Poppins"],
      },
      colors: {
        primary: "#FA4516", // Ensure the hex color values are prefixed with #
        secondary: "#4D5467",
      },
      backgroundColor: {
        primary: "#FA4516", // Ensure the hex color values are prefixed with #
        secondary: "#4D5467",
      },
    },
  },
  plugins: [],
}
