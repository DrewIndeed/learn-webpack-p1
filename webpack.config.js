const path = require('path');

module.exports = {
  entry: './src/index.js', // can be an {}, with multiple entreis
  output: {
    filename: 'damnson.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
