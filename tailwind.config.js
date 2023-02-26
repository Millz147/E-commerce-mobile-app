/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C00',
        black: '#222222',
        grey: '#F2F2F2',
        'grey-2': '#828282',
        error: 'F90000',
        success: '#27AE60',
      },
    },
  },
  plugins: [],
};
