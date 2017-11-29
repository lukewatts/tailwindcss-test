const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

var input = {
    js: {
        entry: './src/js/index.js'
    }
};

var output = {
    css: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'main.css'
    }
}

module.exports = {
  entry: input.js.entry,
  output: {
    path: output.css.path,
    filename: output.css.filename,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(output.css.filename)
  ]
}