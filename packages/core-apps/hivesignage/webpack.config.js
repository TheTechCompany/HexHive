const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { ModuleFederationPlugin } = require('webpack').container;
const webpack = require('webpack')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require("path")
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');

module.exports = (webpackConfigEnv, argv) => {
  // webpackConfigEnv.standalone = true;

  const defaultConfig = singleSpaDefaults({
    orgName: "HexHive",
    projectName: "HiveSignage",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.externals = [];

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object,
    entry: './src/HexHive-Signage.tsx',
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
      publicPath: process.env.PUBLIC_PATH || 'http://localhost:8520/'
    },
    plugins: [
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ['yaml', 'json'],
        publicPath: process.env.PUBLIC_PATH || 'http://localhost:8520/'
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.EnvironmentPlugin({
        ...process.env,
        PUBLIC_URL: '/dashboard/signage'
      }),  
        new ModuleFederationPlugin({
        name: 'hexhive_hivesignage',
        library: {type: 'var', name: 'hexhive_hivesignage'},
        filename: './remoteEntry.js',
        shared: {
          'react': {version: '17.0.2', singleton: true}, 
          'react-dom': {version: '17.0.2'}, 
          'styled-components': {version: '5.0.3', singleton: true},
          "grommet": {version: '2.17.4'},
          'single-spa-react': {eager: true}
        },
        remotes: {
          'hexhive_root': 'hexhive_root'
        },
        exposes: {
          '.': './src/HexHive-Signage'
        },
      })
    ]
  });
};
