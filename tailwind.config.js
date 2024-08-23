/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      screens:{
        "xs":"320px"
      },
      margin:{
        'custom-mr':"0.125rem",
        'custom-mr-2': "0.7rem",
        '1.5':"0.63rem"
      },
      listStyleImage: {
        triangle: 'url("/src/assets/list-icone.svg")',
      },
      backgroundImage: _theme => ({
        'IRESP': "url('../../public/services/IRESP.png')",
        'IMAE': "url('../../public/services/IMAE.png')",
        'CRAML': "url('../../public/services/CRAML.png')",
        'CND': "url('../../public/services/CND.png')",
        'RIGS': "url('../../public/services/RIGS.png')",
        'EATA': "url('../../public/services/EATA.png')",
        'CREIE': "url('../../public/services/CREIE.png')",
        'AT': "url('../../public/services/AT.png')",
        'EAER': "url('../../public/services/EAER.png')",
        'MADDP': "url('../../public/services/MADDP.png')",
        'FAPI': "url('../../public/services/FAPI.png')",
        'FCND': "url('../../public/services/FCND.png')",
        'FES': "url('../../public/services/FES.png')",
      }),
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
        'primary-50':'#FA4516',
      'primary-100':'#fa45168c',
      'primary-200':'#fa45164d',
      about1 :"#A52B0B",
      about2:"#FA4516",  // Ensure the hex color values are prefixed with #
        secondary: "#4D5467",
        other:"#282F3A",
        'other-100':'#282f3abf'
      },
      fontSize :{
        '4.5xl':"2.75rem",
        '5.5xl':'3.75rem',
        '2.5xl':"1.7rem",
        'xxs':"0.5rem",
        "1.4xl":'1.4rem'
        
      },
      backgroundImage:{
        'home':"url('./src/assets/home-page.jpg)"
      },
      width:{
        homeS:"385px",
        homeXs:"345px",
        homeS2:"839px",
        homeM:"415px",
      },
      height:{
        
        homeS:"521px",
        homeXs:"421px",
        home2xs: "381px",
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
