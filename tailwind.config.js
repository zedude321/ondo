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
        'light-gray': 'rgb(156, 156, 156)',
      },
      width: {
        'xl': '1200px'
      }
    },
    fontSize: {
      'md': '16px',
      'sm': '14px'
    }
  },
  plugins: [],
  darkMode: 'media'
}
