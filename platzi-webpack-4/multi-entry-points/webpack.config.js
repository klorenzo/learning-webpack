const path = require("path")

module.exports = {
    entry : {
        home : path.resolve(__dirname, "src", "js", "home.js"),
        contact : path.resolve(__dirname, "src", "js", "contact.js"),
        prices : path.resolve(__dirname, "src", "js", "prices.js")
    },
    mode : "development",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    }
}