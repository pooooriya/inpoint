/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
            },
          },
        },
      },
      fontFamily: {
        'sans': ['Yekan', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          "1100": "#253343",
          "1000": "#344456",
          "900": "#465A71",
          "800": "#647E9A",
          "700": "#7A90AA",
          "600": "#91A4BC",
          "500": "#B2C2D6",
          "400": "#D1DBE8",
          "300": "#E9EDF5",
          "200": "#F5F7FA",
          "100": "#FFFFFF"
        },
        secondary: "#00BABA",
        danger: "#EE5353"
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
