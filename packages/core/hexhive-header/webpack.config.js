const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { ModuleFederationPlugin } = require('webpack').container;
const webpack = require('webpack')
const path = require("path")

module.exports = (webpackConfigEnv, argv) => {
  // webpackConfigEnv.standalone = true;

  const defaultConfig = singleSpaDefaults({
    orgName: "HexHive",
    projectName: "Header",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.externals = [];

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object,
    entry: './src/HexHive-Header.tsx',
    externals: [],
    devServer: {
      hot: false
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
            test: /\.css$/i,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
            // More information here https://webpack.js.org/guides/asset-modules/
            type: "asset",
          },
        
      ]
    },
    output: {
      publicPath: process.env.PUBLIC_PATH || 'http://localhost:8515/'
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.EnvironmentPlugin({
        ...process.env,
        PUBLIC_URL: '/'
      }),  
        new ModuleFederationPlugin({
        name: 'hexhive_hiveheader',
        library: {type: 'var', name: 'hexhive_hiveheader'},
        filename: './remoteEntry.js',
        shared: {
          'react': {version: '17.0.2', singleton: true}, 
          'react-dom': {version: '17.0.2'}, 
          'styled-components': {version: '5.0.3', singleton: true},
          "grommet": {version: '2.17.4'},
          'monaco-editor': {version: '0.27.0'},

          'single-spa-react': {eager: true}
        },
        remotes: {
          'hexhive_root': 'hexhive_root'
        },
        exposes: {
          '.': './src/HexHive-Header'
        },
      })
    ]
  });
};
