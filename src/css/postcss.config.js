// var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-cssnext',
    'cssnano'
  ],
  input: './css/main.css',
  output: './../static/css/main.min.css',
  cssnano: {
    discardComments: {
      removeAll: true
    },
    minifyFontValues: false,
    autoprefixer: false
  }
}
