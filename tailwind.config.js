/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'rgb(24, 24, 24)',
        'dark-content': 'rgb(33, 33, 33)',
        'pink': 'rgb(255, 0, 153)',
        'dark-gray': 'rgb(113, 113, 113)',
        'off-white': 'rgb(156, 156, 156, 0.32)',
        'light-gray': 'rgb(156, 156, 156)',
      },
      width: {
        'xl': '1200px',
        '2xl': '1400px'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.2))'
      }
    }
  },
  plugins: [],
  darkMode: 'media'
}
