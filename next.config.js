const withTypescript = require("@zeit/next-typescript");
const withLess = require('@zeit/next-less');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withLess(withTypescript({
    webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

        return config
    }
}));