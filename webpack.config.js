
module.exports = {
  entry: './src/test.ts',
  output: {
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader?modules', 'sass-loader']
      }
    ]
  }
}
