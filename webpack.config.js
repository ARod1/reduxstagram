"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');



const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");




//loads scripts and files into html template
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: SRC_DIR + "/index.html",
  filename: 'index.html',
  inject: 'body'
})








const config = {
    devtool:'cheap-module-eval-source-map',
    entry:  [
        SRC_DIR + '/index.js',
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        'webpack-dev-server/client?http://localhost:8080' // WebpackDevServer host and port
    ],
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['react-hot-loader', 'babel-loader'], 
                exclude: /node_modules/
            },
            {
                test:/\.(sass|scss)$/,
                use: ["style-loader",  "css-loader",  "sass-loader"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        HtmlWebpackPluginConfig,
    ],
};

module.exports = config;