module.exports = {
    entry: './app/App.js',
    output: {
        path: './src',
        filename: 'bundle.js'
    },
	devServer: {
    inline: true,
    contentBase: './src',
    port: 3000
	},
	module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015','react'],
            plugins: ['transform-object-rest-spread']
        }
    }]
}
}
