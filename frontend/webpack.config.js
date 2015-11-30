module.exports = {
  entry: './app/app.js',
  output: {
    path: './dist/',
    filename: 'beers.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  }
};
