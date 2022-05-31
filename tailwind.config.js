const colors = require('./node_modules/tailwindcss/colors');
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        Sacremento: ['Sacramento','sans-serif'],
        Roboto:['Roboto Condensed','sans-serif'],
        Michroma:['Michroma','sans-serif'],
        ComforterBrush:['Comforter Brush','sans-serif']
      }
    },
    colors:
      { 
        orange:colors.orange,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        floralwhite: '#fff9ef',
        black: colors.black,
        turquoise:'#30ffd9',
        white: colors.white,
        yellow: colors.yellow,
      }
  },
  plugins: [],
}

