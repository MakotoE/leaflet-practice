const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    devServer: {
        compress: true,
        port: 3000,
    },
    entry: __dirname + '/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            }
        ],
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css'],
    },
    target: 'web',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new CopyPlugin({
            patterns: [
                { from: "icons", to: "icons" },
            ],
        }),
    ],
};
