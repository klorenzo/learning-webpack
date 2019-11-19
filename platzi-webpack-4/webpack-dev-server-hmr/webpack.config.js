const path = require("path")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");

module.exports = {
    entry : {
        home : path.resolve(__dirname, "src", "js", "home.js"),
        contact : path.resolve(__dirname, "src", "js", "contact.js")
    },
    mode : "development",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "home.html"),
            filename : "home.html",
            chunks : ["home"]
        }),
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "contact.html"),
            filename : "contact.html",
            chunks : ["contact"]
        })
    ],
    devServer : {
        host: "127.0.0.1",
        port: "80",
        hot: true,
        open: true,
        index: "home.html"
    }
}