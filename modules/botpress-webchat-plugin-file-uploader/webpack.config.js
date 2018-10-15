const path = require('path')
const pkg = require('./package.json')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    // libraryTarget: 'assign',
    // library: ['botpress', pkg.name],
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'latest', 'stage-0', 'react']
          }
        }
      }
    ]
  },
  externals: {
    'react': '(typeof window === \'undefined\') ? null : (window.parent || window).React',
    'react-dom': '(typeof window === \'undefined\') ? null : (window.parent || window).ReactDOM'
  },
}
