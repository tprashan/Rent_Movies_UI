const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');
const BUILD_DIR = path.resolve(__dirname, '../build');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(APP_DIR, 'index.html'),
    filename: 'index.html',
    inject: 'body',
    favicon: path.join(APP_DIR, '/assets/favicon.png'),
    publicPath: '/',
});

module.exports = {
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.[hash].js',
        publicPath: '/',
    },

    resolve: {
        modules: [
            APP_DIR,
            'node_modules',
        ],
        extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    },

    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: ['babel-loader'] },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.(woff|svg)$/, loader: 'file-loader' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader" }
        ]
    },

    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],

    target: 'web'
};
