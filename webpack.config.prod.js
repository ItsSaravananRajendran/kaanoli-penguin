const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        // We want to create the JavaScript bundles under a
        // 'static' directory
        filename: "[name].[chunkhash].js",
        // Absolute path to the desired output directory. In our
        //case a directory named 'dist'
        // '__dirname' is a Node variable that gives us the absolute
        // path to our current directory. Then with 'path.resolve' we
        // join directories
        // Webpack 4 assumes your output path will be './dist' so you
        // can just leave this
        // entry out.
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
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
                            modules: {
                                localIdentName: "[name]_[local]",
                            },
                            importLoaders: 1,
                            localsConvention: "camelCase",
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                    },
                ],
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            inject: 'body'
        }),

        // Create the stylesheet under 'styles' directory
        new MiniCssExtractPlugin({
            filename: "styles/styles.[hash].css",
        })],
};