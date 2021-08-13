const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require('webpack');
const {ModuleFederationPlugin} = webpack.container
const TsConfigPaths = require('tsconfig-paths-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  // webpackConfigEnv.standalone = true;

  const defaultConfig = singleSpaDefaults({
    orgName: "HexHive",
    projectName: "HiveDashboard",
    webpackConfigEnv,
    argv,
  });

  defaultConfig.externals = [];

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object,
    entry: './src/HexHive-HiveFlow.tsx',
    externals: [],
    devServer: {
      hot: false
    },
    output: {
      publicPath: 'http://localhost:8502/'
    },
    resolve : {
      plugins: [
        new TsConfigPaths()
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
        new ModuleFederationPlugin({
        name: 'hexhive_dashboard',
        library: {type: 'var', name: 'hexhive_dashboard'},
        filename: './remoteEntry.js',
        shared: {
          'react': {eager: true, singleton: true}, 
          'react-dom': {version: '17.0.2'}, 
          'styled-components': {version: '5.3.0', singleton: true},
          'single-spa-react': {eager: true}
        },
                remotes: {
          'hexhive_root': 'hexhive_root'
        },
        exposes: {
          '.': './src/HexHive-HiveFlow'
        },
      })
    ]
  });
};
