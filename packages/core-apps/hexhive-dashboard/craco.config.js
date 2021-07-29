const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
   webpack: {
        plugins: [
            new TsconfigPathsPlugin()
        ]
    }
};