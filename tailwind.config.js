/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1440px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '940px'},
      'm': {'max': '768px'},
      'sm': {'max': '640px'},
    },
    fontFamily: {
      'Jost': ['Jost'],
      'Denistina': ['Denistina']
    },
    extend: {
      colors: {
        'mainGray': 'hsla(0, 0%, 95%, 1)',
        'advGray': 'hsla(0, 0%, 40%, 0.2)',
        'mainGrayHover': 'hsla(0, 0%, 95%, 0.5)',
        'mainBlue': 'hsla(175, 46%, 59%, 1)',
        'darkGray': 'hsla(0, 0%, 40%, 1)',
        'progressLight': 'hsla(0, 0%, 75%, 1)',
        'progressDark': 'hsla(0, 0%, 10%, 1)'
      },
      backgroundImage: {
        'brief-bg': "url('/src/img/brief-bg.png')",
      },
      boxShadow: {
        'quiz': '0 0px 14px 2px hsla(0, 0%, 0%, 0.1)',
      }
    },
  },
  plugins: [],
}

