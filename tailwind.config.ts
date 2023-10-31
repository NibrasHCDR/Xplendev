module.exports= {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        alumni: ['Alumni Sans Collegiate One','sans-serif'],
        roboto: ['Roboto Slab','serif'],
        rubik: ['Rubik','sans-serif'],
        garamond: ['EB Garamond','serif'],
        saira: ['Saira Condensed','sans'],
        wizard: ['Cardo','serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
}