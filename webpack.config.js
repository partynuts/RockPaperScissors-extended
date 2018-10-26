module.exports = {
    entry: "./components/app/index.jsx",
    output: {
        path: __dirname + "/dist", 
        publicPath: "/",
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: [
            "*", ".js", ".jsx"
        ]
    }
}