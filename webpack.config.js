const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

	devServer: {
		'static': path.resolve(__dirname, './public/'),
		compress: true,
		open: true,
		port: 3000,
		historyApiFallback: true
	},

	entry: {
		main: path.resolve(__dirname, './src/index.jsx'),
	},

	output: {
        publicPath: '/build',
		path: path.resolve(__dirname, './public/build'),
		filename: '[name].[fullhash].js',
		clean: true,
	},

	plugins: (function() {
		let plugins = [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, './src/index.html'),
				filename: '../index.html',
			}),
		];
		return plugins;
	}()),

    module: {
        rules: [
            {
				test: /\.js(x)?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: false,
							configFile: path.resolve('.babelrc')
						}
					},
				],
			},
        ]
    }
};
