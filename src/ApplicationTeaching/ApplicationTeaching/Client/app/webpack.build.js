const path = require("path");


const config = {
	entry: {
		app: ['@babel/polyfill', './src/index.js'],
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader'
				],
			},
		],
	},
	resolve: {
		extensions: ['.js'],
	},
	mode: "development"
};
const root = Object.assign({}, config, {
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../../wwwroot/dist'),
	},
});




module.exports = [root]