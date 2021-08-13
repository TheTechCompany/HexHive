const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { ModuleFederationPlugin } = require('webpack').container;
const TsConfigPaths = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const glob = require("glob");

module.exports = {
    // modify the webpack config however you'd like to by adding to this object,
    entry: glob.sync('src/**/*.{ts, tsx}').reduce((acc, file) => {acc[file.replace(/^\.\/src\//, "")] = file; return acc}),
    externals: [],
    devServer: {
      hot: false
    },
    optimization: {
      usedExports: true,
      minimizer: [
       new TerserPlugin({})
      ]
    },
    output: {
      libraryTarget: 'commonjs',
      publicPath: 'http://localhost:8500/',
      filename: '[name].js',
      sourceMapFilename: '[name].js.map'
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [new TsConfigPaths()]
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "ts-loader",
              "options": {
                "projectReferences": true
              }
            },
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
      },
      ]
    },
    plugins: [
        new ModuleFederationPlugin({
        name: 'hexhive_ui',
        library: {type: 'var', name: 'hexhive_ui'},
        filename: './remoteEntry.js',
        shared: {
          'react': {version: '17.0.2', singleton: true}, 
          'react-dom': {version: '17.0.2'}, 
          'styled-components': {version: '5.0.3', singleton: true},

          'single-spa-react': {eager: true}
        },
        remotes: {
          'hexhive_root': 'hexhive_root'
        },
        exposes: {
          '.': './src/index'
        },
      })
    ]
}

