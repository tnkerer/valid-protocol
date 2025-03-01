/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px', // Custom breakpoint for small screens
      },
      colors: {
        blue: {
          50: '#e3f2ff', // adjust these if needed
          100: '#b3d4ff',
          200: '#80b5ff',
          300: '#4d95ff',
          400: '#267eff',
          500: '#0052FF', // new standard blue
          600: '#004ce6', // you can adjust darkening if desired
          700: '#0045cc',
          800: '#003fb3',
          900: '#003a99',
        },
      },
    },
  },
  plugins: [],
}
