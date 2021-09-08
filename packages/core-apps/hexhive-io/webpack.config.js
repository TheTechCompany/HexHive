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
    mode: "development",
    // modify the webpack config however you'd like to by adding to this object
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
      new webpack.EnvironmentPlugin({
        ...process.env,
      }),  
      new ModuleFederationPlugin({
        name: 'hexhive_root',
        library: {type: 'var', name: 'hexhive_root'},
        filename: './remoteEntry.js',
        remotes: {
          'hexhive_hiveflow': 'hexhive_hiveflow',
          'hexhive_dashboard': 'hexhive_dashboard',
          'hexhive_hivecommand': 'hexhive_hivecommand',
          'hexhive_hivemind': 'hexhive_hivemind',
          'hexhive_hivefiles': 'hexhive_hivefiles',
          'hexhive_hive3d': 'hexhive_hive3d'
        },
        shared: {
          "react": {version: '17.0.2'},
          "grommet": {version: '2.17.4'},
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
