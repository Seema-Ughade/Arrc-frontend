// /** @type {import('tailwindcss').Config} */
// export default {
  
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {

//     extend: {
      
      
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         colors: {
//           'main-color': '#761fe3',
//           'color-two': '#141414',
//           'color-three': '#bdbdbd',
//           'color-four': '#0f0f0f',
//           'color-five': '#d093e8',
//           'color-six': '#a3a3a3',
//           'color-seven': '#1c1c1c',
//           'color-eight': '#333333',
//           'color-nine': '#242424',
//           'color-ten': '#343334',
//           'custom-new': '#231e29',
//           'custom-dark': '#1c1425',
//           'custom-purple': '#761fe3',


//         },
//       },
//       animation: {
//         fadeIn: 'fadeIn 1s ease-out',
//       },
//     },
//   },
//   plugins: [],
// }




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#761fe3',
        'color-two': '#141414',
        'color-three': '#bdbdbd',
        'color-four': '#0f0f0f',
        'color-five': '#d093e8',
        'color-six': '#a3a3a3',
        'color-seven': '#1c1c1c',
        'color-eight': '#333333',
        'color-nine': '#242424',
        'color-ten': '#343334',
        'custom-new': '#231e29',
        'custom-dark': '#1c1425',
        'custom-purple': '#761fe3',
        'customCyan': '#00DDDF',  // Custom color definition
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      screens: {
        // Mobile screens
        'sm': '640px',  // Small devices like mobile phones
        'md': '768px',  // Tablets and medium-sized devices

        // Custom laptop breakpoints
        'lg': '1024px', // Large devices like laptops
        'lg-max': { 'min': '1024px', 'max': '1244px' }, // Between 1024px and 1244px
        'xl': '1245px', // 1245px and above
        'xl-max': { 'min': '1245px', 'max': '1440px' }, // Between 1245px and 1440px
        '2xl': '1441px', // 1441px and above for larger laptops
      },
    },
  },
  plugins: [],
}
