module.exports = {
	entry : './js/main.js',
	output: {
		path : __dirname + '/dist/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.png$/, loader: 'url-loader'},
			{test: /\.vue$/, loader: 'vue-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'}
		]
	},
	devServer:{
		inline : true
	}
}