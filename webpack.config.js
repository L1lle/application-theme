// Set the event based on the npm script that is running (start, build, test, etc.)
// const npmEvent = process.env.npm_lifecycle_event;

// export the specific config for current process
// module.exports = require(`./conf/webpack.${npmEvent}.config.js`);
// 

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: [
        './src/js/app.js'
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
                test: /\.s?[ac]ss$/,
                use: [
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            sourceMap: true,
                            plugins: function() { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('postcss-flexbugs-fixes'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader', // compiles SASS to CSS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader'
            },
            {
                test: /.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
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
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
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
            filename: 'clean.html',
            template: './src/demo/html/clean.html'
        })
    ]
}