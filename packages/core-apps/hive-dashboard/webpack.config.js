const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require('webpack')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hexhive-core",
    projectName: "dashboard",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object,
    resolve: {
      fallback: {
        process: require.resolve('process/browser')
      }
    },
    module: {

      rules: [
        {
          test: /\.m?js/,
          resolve: {
              fullySpecified: false,
          },
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      })
    ]
  });
};
