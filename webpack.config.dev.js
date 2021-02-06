const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]-[local]",
                            },
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8500,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "styles/styles.[hash].css",
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        })],
    watchOptions: {
        aggregateTimeout: 20,
        poll: 500,
        ignored: ["node_modules/**"],
    },
};