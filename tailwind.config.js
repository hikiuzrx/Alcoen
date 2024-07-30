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
        primary: "#FA4516",
        'primary-100':'#fa45168c',
        'primary-200':'#fa45164d', // Ensure the hex color values are prefixed with #
        secondary: "#4D5467",
        nw:"#ffffff",
        nwb:"#ffffff00",
        other:"#282F3A",
         'other-100':'#282f3abf'
      },
      backgroundColor: {
        primary: "#FA4516",
      'primary-100':'#fa45168c',
      'primary-200':'#fa45164d',  // Ensure the hex color values are prefixed with #
        secondary: "#4D5467",
        other:"#282F3A",
        'other-100':'#282f3abf'
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
    plugins: [
    function ({ addUtilities }) {
      addUtilities({
        /* Scrollbar width */
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
        },
        /* Scrollbar track */
        '.scrollbar-track': {
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
        },
        /* Scrollbar thumb */
        '.scrollbar-thumb': {
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '10px',
            border: '2px solid #f1f1f1',
          },
        },
        /* Scrollbar thumb on hover */
        '.scrollbar-thumb:hover': {
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
      });
    },
  ],
}
