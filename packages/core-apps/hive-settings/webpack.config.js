const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require('webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hexhive-core",
    projectName: "settings",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      plugins: [
        new TsconfigPathsPlugin(),
      ],
      alias: {
        // // react: path.resolve(__dirname, '../../../node_modules/react'),
        // '@types/react': path.resolve(__dirname, '../../../node_modules/@types/react'),
        // '@types/react-dom': path.resolve(__dirname, '../../../node_modules/@types/react-dom'),
        // // '@types/react-transition-group': path.resolve(__dirname, '../../../node_modules/@types/react-transition-group'),

        // // '@hexhive/ui': path.resolve(__dirname, '../../../node_modules/@hexhive/ui'),
        // // '@hexhive/utils': path.resolve(__dirname, '../../../node_modules/@hexhive/utils'),
        // // '@hexhive/styles': path.resolve(__dirname, '../../../node_modules/@hexhive/styles'),
        // // "@mui/x-date-pickers": path.resolve(__dirname, '../../../node_modules/@mui/x-date-pickers'),
        // // // '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
        // '@mui/material': path.resolve(__dirname, '../../../node_modules/@mui/material'),
        // // 'styled-components': path.resolve(__dirname, '../../../node_modules/styled-components'),
        // // 'react-router-dom': path.resolve(__dirname, '../../../node_modules/react-router-dom'),
        // '@emotion/react': path.resolve(__dirname, '../../../node_modules/@emotion/react'),
        // '@emotion/styled': path.resolve(__dirname, '../../../node_modules/@emotion/styled')
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
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.EnvironmentPlugin({
        ...process.env,
        PUBLIC_URL: process.env.NODE_ENV == 'production' ? '/dashboard/settings' : '/dashboard/hive-settings'
      }),
    ]
  });
};
