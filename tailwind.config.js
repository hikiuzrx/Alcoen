/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        '2xl': '5px 5px 10px rgba(0, 0, 0, 0.5)',
        'none': 'none',
      },
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
      'primary-200':'#fa45164d',
      about1 :"#A52B0B",
      about2:"#FA4516",  // Ensure the hex color values are prefixed with #
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
  variants: {
    extend: {
      textShadow: ['responsive', 'hover', 'focus'],
    },
  },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.text-shadow-sm': {
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-md': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-lg': {
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-xl': {
            textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-2xl': {
            textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-none': {
            textShadow: 'none',
          },
        };
        addUtilities(newUtilities, ['responsive', 'hover'])
      },
  
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
