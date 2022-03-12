const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  plugins: [new CleanWebpackPlugin()],
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
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
};