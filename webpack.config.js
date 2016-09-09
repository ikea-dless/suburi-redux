module.exports = {
  entry: './src/index.js',
  output: {
    path: 'assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
