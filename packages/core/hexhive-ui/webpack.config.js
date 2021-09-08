const path = require('path')
module.exports = {
  entry: './src/index.tsx',
  optimization: {
         splitChunks: {
           chunks: 'all',
         },
     },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
            fullySpecified: false,
        },
    },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};