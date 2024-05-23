/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      theme: {
        textShadow: {
          enabled: true,
          default: '0px 3px rgba(0,0,0,0.25)' 
        }
      }, 
      colors: {
        'pearlbush': '#eaddd7',
        'spinodal': '#cadbed',
        'classicrose': '#fbd0d9',
        'berylgreen': '#d2e0b6',
      },
    },
  },
  plugins: [],
} 