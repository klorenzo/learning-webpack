const path = require("path")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
                    {
                        loader : MiniCSSExtractPlugin.loader
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "home.html"),
            filename : "home.html",
            chunks : ["home"]
        }),
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "contact.html"),
            filename : "contact.html",
            chunks : ["contact"]
        }),
        new MiniCSSExtractPlugin({
            filename : "css/[name].css"
        })
    ],
    devServer : {
        host: "0.0.0.0",
        port: "80"
    }
}