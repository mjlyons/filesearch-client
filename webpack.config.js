module.exports = {
  entry: './src/container/container.tsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.webpack.js', 'web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': process.env.NODE_ENV },
    }),
  ]
}
