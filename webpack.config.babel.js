import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'mini-css-extract-plugin'
import fs from 'fs'


let config = {
  mode: 'development',
  stats: 'minimal',
  entry: {
    'css/style': [
      path.resolve(__dirname, '_css/index.css')
    ],
    'js/app': [
      path.resolve(__dirname, '_js/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'assets' ),
    filename: '[name].js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      options: {}
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    function() {
      this.plugin('done', stats => {
        fs.writeFileSync(path.join(__dirname, '_data', 'webpack.yml'),
          'hash: "'+ stats.hash +'"')
        console.log("\r\n\r\n+++ writing to webpack.yml +++\r\n\r\n")
      })
    }
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ExtractTextPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}


if ( process.env.NODE_ENV === 'production' ) {
  config.mode = 'production'
  config.optimization = {
    minimize: true
  }
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }))
}

export default config
