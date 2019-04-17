const path = require("path");
const outDir = path.resolve(__dirname, "public");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devtool: false,

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    output: {
        filename: "bundle.js",
        path: outDir
    },

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};
