const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function override(config, env) {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    let tsRule = oneOfRule.oneOf.find((rule) => rule.test.toString().includes("ts|tsx"))

    if(!config.plugins){
        config.plugins = []
    }

    const tsLoader = tsRule.loader;
    delete tsLoader.loader;

    tsLoader.use = [{
        loader: 'ts-loader',
        options: {
            projectReferences: true
        }
    }]

    config.resolve.plugins.pop();

    config.resolve.plugins.push(new TsconfigPathsPlugin());

    tsRule = oneOfRule.oneOf.find((rule) => rule.test.toString().includes("ts|tsx"))

    tsRule.include = undefined;
    tsRule.exclude = /node_modules/;

    return config;
}