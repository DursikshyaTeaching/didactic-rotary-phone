const path = require("path");

const config =  {
	entry: {
		app: ['@babel/polyfill','./src/index.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
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
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		hot: true,
		publicPath:"/dist",
		contentBase: path.resolve(__dirname,"wwwroot")
	},
	mode:"development"
};





const client = Object.assign({}, config, {
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'wwwroot/dist'),
	}
});

// const root = Object.assign({}, config, {
// 	output: {
// 		filename: '[name].bundle.js',
// 		path: path.resolve(__dirname, '../../wwwroot/dist'),
// 	},
// });




module.exports = [client]