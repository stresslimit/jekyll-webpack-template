import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

let extractStyles = new ExtractTextPlugin({
  filename: '[name].css'
})


let config = {
  stats: 'minimal',
  entry: {
    'css/style': [
      path.resolve(__dirname, '_css/index.css')
    ],
    // 'assets/js/app': [
    //   path.resolve(__dirname, '_js/app.js')
    // ]
  },
  output: {
    path: path.resolve(__dirname, 'assets' ),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractStyles.extract({
          use: ['css-loader?importLoaders=1','postcss-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      options: {
      }
    }),
    extractStyles
  ],
}

export default config
