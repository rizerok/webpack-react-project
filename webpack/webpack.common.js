const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

let extractStylus = new ExtractTextPlugin({
    filename:path.join('bundle','[name].css')
});

module.exports = {
    entry:{
        app:path.resolve('app','app.js')
    },
    output:{
        filename:path.join('bundle','[name].js'),
        publicPath:'/'
    },
    resolve:{
        alias:{
            root:path.resolve(),
            bundle:path.resolve('bundle'),
            app:path.resolve('app'),
            style:path.resolve('assets','style')
        }
    },
    module:{
        rules:[
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'eslint-loader',
                include: [
                    path.resolve('app')
                ]
            },
            {
                test:/\.js$/,
                include:path.resolve('app'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'env',//https://babeljs.io/docs/plugins/preset-env/
                            'react'
                        ],
                        cacheDirectory:true
                    }
                }
            },
            {
                test:/\.styl$/,
                use:extractStylus.extract({
                    fallback: 'style-loader',
                    use:[{
                        loader: 'css-loader',
                        options: {
                            sourceMap:true,
                            modules: true,
                            importModules:2,
                            //https://github.com/webpack/loader-utils#interpolatename
                            localIdentName: '[name]__[local]-[hash:base64:5]'
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    {
                        loader:'stylus-loader'
                    }]
                })
            }
        ]
    },
    devServer:{
        port:3000,
        open:true,
        historyApiFallback: true
    },
    plugins:[
        extractStylus,
        new CleanWebpackPlugin(
            [
                'bundle',
                'index.html'
            ],
            {
                root:     path.resolve(),
                verbose:  true
            }
        ),
        new HtmlWebpackPlugin({
            //alwaysWriteToDisk: true,
            //title:'for library develop',
            inject:false,
            template: path.resolve('templates','index.html.ejs'),
            filename:'index.html'
        })
        //new HtmlWebpackHarddiskPlugin()
    ]
};