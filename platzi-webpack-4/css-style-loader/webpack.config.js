const path = require("path")

module.exports = {
    entry : path.resolve(__dirname, "src", "js", "index.js"),
    mode : "development",
    output : {
        path : path.resolve(__dirname, "dist", "js"),
        filename: "index.js"
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
    }
}