const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const commonConfig = require('./webpack.common.config');

const APP_DIR = path.resolve(__dirname, '../src');

const devConfig = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'webpack-hot-middleware/client?reload=true',
            'react-hot-loader/patch',
            path.join(APP_DIR, 'index.js')
        ]
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, enforce: 'pre' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                autoprefixer({ browsers: ['ie 11', 'ff 45', 'last 2 versions'] })
                            ],
                        }
                    },
                    { loader: 'sass-loader?sourceMap', query: { outputStyle: 'expanded' } },
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};

module.exports = merge(commonConfig, devConfig);
