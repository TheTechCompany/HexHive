const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function override(config, env) {
    config.resolve.plugins.pop();

    config.resolve.plugins.push(new TsconfigPathsPlugin());

    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    const tsRule = oneOfRule.oneOf.find((rule) =>
      rule.test.toString().includes("ts|tsx")
    );
    tsRule.include = undefined;
    tsRule.exclude = /node_modules/;
    
    return config;
}