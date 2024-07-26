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
        nw:"#ffffff",
        nwb:"#ffffff00"
      },
      backgroundColor: {
        primary: "#FA4516", // Ensure the hex color values are prefixed with #
        secondary: "#4D5467",
        other:"#282F3A"
      },
      backgroundImage:{
        'home':"url('./src/assets/home-page.jpg)"
      },
      width:{
        homeS:"385px",
        homeS2:"839px",
      },
      height:{
        homeS:"521px",
        homeS2:"1267px",
        homeS3:"621px"
      },
      maxWidth:{
         homeS:"385px",
         homeS2:"839px"
      },
      maxHeight:{
        homeS:"521px",
        homeS2:"1267px",
        homeS3:"839px"
        
      }
      

    },
  },
  plugins: [],
}
