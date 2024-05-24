/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', 
    './*.js',
  ],
  theme: {
    extend: {
      theme: {
        textShadow: {
          enabled: true,
          default: '0px 3px rgba(0,0,0,0.25)' 
        }
      }, 
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleX(0)'},
          '80%': { transform: 'scaleX(1.2)'},
          '100%': { transform: 'scaleX(1)'},
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
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