const path = require('path');
const mode =  process.env.NODE_ENV || "development";
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode,
    target: "node",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "dist"),
        library: {
            type: 'commonjs'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-typescript",
                            "@babel/preset-env"
                        ]
                    }
                },

            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "node_modules/rustgql_core/rustgql_core_bg.wasm"),
                }
            ]
        })
    ],
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
}