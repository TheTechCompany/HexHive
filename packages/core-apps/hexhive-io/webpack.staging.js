const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack');
const {ModuleFederationPlugin } = webpack.container

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "HexHive";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    mode: "development",
    devServer :{
      hot: false
    },
    resolve: {
      plugins: [new TsPathsPlugin()]
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new ModuleFederationPlugin({
        name: 'hexhive_root',
        library: {type: 'var', name: 'hexhive_root'},
        filename: './remoteEntry.js',
        remotes: {
          'hexhive_hiveflow': 'hexhive_hiveflow@https://flow-staging.hexhive.io/remoteEntry.js',
          'hexhive_dashboard': 'hexhive_dashboard@https://dashboard-staging.hexhive.io/remoteEntry.js',
          'hexhive_hivecommand': 'hexhive_hivecommand@https://command-staging.hexhive.io/remoteEntry.js',
          'hexhive_hivemind': 'hexhive_hivemind@https://mind-staging.hexhive.io/remoteEntry.js'
        },
        shared: {
          "react": {version: '17.0.2'},
          "react-dom": {version: '17.0.2'},
          'styled-components': {version: '5.3.0', singleton: true},
          'single-spa-react': {eager: true}
        }
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
