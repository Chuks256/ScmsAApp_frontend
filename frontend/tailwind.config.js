/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1096px',
      xl: '1440px',
      laptop:'1535px',
      phonexl:'576px'
    },
    extend: {
      fontFamily:{
        "poppins":['Poppins', "sans-serif" ]
      }
    },
  },
  plugins: [],
}
