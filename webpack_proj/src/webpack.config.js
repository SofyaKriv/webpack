module.exports = {
  mode: 'development',
  entry: 'index.js',
  devServer: {
    contentBase: './dist',
    stats: {
      children: false,
      maxModules: 0,
    },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
  },
  mode: 'production',
  entry: 'index.js',
  devServer: {
    contentBase: './dist',
    stats: {
      children: false,
      maxModules: 0,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
  },
};
