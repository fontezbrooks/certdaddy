const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    target: "electron-main",
    devtool: "source-map",
    entry: "./src/main.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            { test: /\.(ts|tsx)$/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    node: {
        __dirname: false,
        __filename: false
    },
};

module.exports = (env, argv) => {
    return config;
};
