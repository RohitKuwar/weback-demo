const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3200
    }
}