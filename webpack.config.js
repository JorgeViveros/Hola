var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public/js',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
	  historyApiFallback: true,
	},
	plugins: [
	  new HtmlWebpackPlugin({
	    template: 'public/index.html'
	  })
	]
}