var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// 定义接口
module.exports = {
	// 入口文件
	entry: __dirname + '/modules/bootstrap.jsx',
	// 发布文件
	output: {
		filename: 'pack/abc.js'
	},
	// 定义模块
	module: {
		// 加载机
		loaders: [
			{
				// 加载jsx
				test: /\.jsx$/,
				exclude: "/node_modules/",
				loader: 'babel-loader?presets[]=react,presets[]=es2015'
				//这是webpack222的  可以压缩但是发布的时候没压缩
				//也没有了calss关键字了
			},
			// less加载机
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}