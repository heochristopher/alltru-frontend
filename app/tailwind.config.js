/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { width: '400px' },
          '10%': { width: '400px' },
          '30%': { width: '500px' },
          '50%': { width: '500px' },
          '100%': { width: '400px' },
        },
      },
      animation: {
        slide: 'slide 1.25s linear',
      },
    },
  },
  plugins: [],
}
