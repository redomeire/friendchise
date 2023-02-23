/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'racing': '#000000',
        'primary-lightest': '#77D9AB',
        'primary-light': '#4ACC8F',
        'primary': '#1DBF73',
        'primary-dark': '#17995C',
        'primary-darker': '#117345',
        'warning-lightest': '#73E2A3',
        'warning-lighter': '#73E2A3',
        'warning': '#16B364',
        'warning-dark': '#099250',
        'warning-darkest': '#087443'
      }
    },
  },
  plugins: [],
}
