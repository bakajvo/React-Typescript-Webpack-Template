const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        hot: true,
        open: true
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
});