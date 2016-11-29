module.exports = {
    entry: './src/app/App.js',
    output: {
        path: './www',
        filename: 'bundle.js'
    },
	devServer: {
    inline: true,
    contentBase: './www',
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
