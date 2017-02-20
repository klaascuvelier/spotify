const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        scripts: './index.js',
        styles: './index.css',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.jpg$/,
                use: 'url-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            interpolate: true
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'raw-loader'
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { cleanupAttrs: true },
                                { removeDoctype: true },
                                { removeXMLProcInst: true },
                                { removeComments: true },
                                { removeMetadata: true },
                                { removeTitle: true },
                                { removeDesc: true },
                                { removeUselessDefs: true },
                                { removeXMLNS: true },
                                { removeEditorsNSData: true },
                                { removeEmptyAttrs: true },
                                { removeHiddenElems: true },
                                { removeEmptyText: true },
                                { removeEmptyContainers: true },
                                { removeUnknownsAndDefaults: true },
                                { removeNonInheritableGroupAttrs: true },
                                { removeUselessStrokeAndFill: true },
                                { removeUnusedNS: true },
                                { cleanupIDs: true },
                                { sortAttrs: true },
                                { removeDimensions: true },
                                { removeStyleElement: true },
                                { removeAttrs: { attrs: '(stroke|fill|fill-opacity|fill-rule)' } }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ]
};
