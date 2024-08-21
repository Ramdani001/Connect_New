/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'bottom-4': 'center bottom 10rem',
      'top-4': 'center top 10rem'
    },
    extend: {
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [],
}

