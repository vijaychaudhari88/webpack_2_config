const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env) {

    return {

        context: path.resolve(__dirname, "./../src"),
        devtool: 'source-map',
        entry: {
            app: './js/index.js',
            vendor: [
                'jquery',
                'react',
                'react-dom',
                'react-router'
            ]
        },

        output: {
            path: path.join(__dirname, './server'),
            filename: '[name].build.js',
            //publicPath: './'
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
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ]
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
                            name: 'assets/[name].[ext]'
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
                names: ["common", "vendor", "bootstrap"],
                minChunks: 2,
                //children: true,
                //async: true,
            }),
            new webpack.NamedModulesPlugin(),
            //new webpack.HotModuleReplacementPlugin(),
        ],

        devServer: {
            port: 7777,
            // host: 'localhost',
            historyApiFallback: true,
            noInfo: false,
            stats: 'minimal',
            hot: true,
            open: true,
            publicPath: '/'
        },

        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [path.join(__dirname, 'src'), 'node_modules']

        },
    }
}
