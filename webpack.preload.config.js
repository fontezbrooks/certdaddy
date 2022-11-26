const path = require("path");

const config = {
    target: "electron-preload",
    devtool: "source-map",
    entry: "./src/preload.ts",
    output: {
        filename: "preload.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".ico"]
    },
    node: {
        __dirname: false,
        __filename: false
    },
};

module.exports = (env, argv) => {
    return config;
};
