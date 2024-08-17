/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {
      
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
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


        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
  plugins: [],
}
