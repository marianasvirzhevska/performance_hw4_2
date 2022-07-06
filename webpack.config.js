const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CriticalCssPlugin = require('critical-css-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(scss)$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new miniCss({
            filename: 'style.css',
        }),
        new CriticalCssPlugin({
            dimensions: [
                {
                  height: 320,
                  width: 568,
                },
                {
                  height: 768,
                  width: 1024,
                },
                {
                  height: 1920,
                  width: 1080,
                },
              ],
        }),
    ],
};
