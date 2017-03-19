const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env) {

    return {

        context: path.resolve(__dirname, "./../src"),
        // devtool: 'cheap-module-source-map',
        entry: {
            app: './js/index.js',
            vendor: ['jquery']
        },

        output: {
            path: path.join(__dirname, './../dist'),
            filename: '[name].build.js',
            //publicPath: '/'
        },

        module: {
            rules: [

                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "eslint-loader",
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: ['css-loader','postcss-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader?name=[path][name]-[hash:4].[ext]',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 35000,
                            name: '[path][name].[ext]'
                        }
                    }
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                // title: 'Webpack 2 Setup',
                filename: 'index.html',
                template: './index.html',
                hash: true,
                showErrors: false,
                cache: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ["common", "vendor", "bootstrap"],
                minChunks: 2,
                //children: true,
                //async: true,
            }),
            new CleanWebpackPlugin(['dist'], {
                root: path.resolve(__dirname, "./../"),
            }),
            // new webpack.HotModuleReplacementPlugin(),
            new ExtractTextPlugin('style.css')

        ],

        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [path.join(__dirname, 'src'), 'node_modules']

        },
    }
}
