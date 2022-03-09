// Set the event based on the npm script that is running (start, build, test, etc.)
// const npmEvent = process.env.npm_lifecycle_event;

// export the specific config for current process
// module.exports = require(`./conf/webpack.${npmEvent}.config.js`);
// 

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: [
        './src/app.js',
        // './src/sass/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app-theme.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/demo/html/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'elements.html',
            template: './src/demo/html/elements.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'navbar.html',
            template: './src/demo/html/navbar.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'sidebars.html',
            template: './src/demo/html/sidebars.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'default.html',
            template: './src/demo/html/default.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'clean.html',
            template: './src/demo/html/clean.html'
        })
    ]
}