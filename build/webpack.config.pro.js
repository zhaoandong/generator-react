const path = require('path')
const webpack = require('webpack')
const workingDir = process.cwd()
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const buildName = '[hash]'
const plugins = [
  new ExtractTextPlugin('[hash].css'),
  new ManifestPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false  // remove all comments
    },
    compress: {
      warnings: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new CleanWebpackPlugin(
    ['dist/*'],
    {
      root: __dirname,
      verbose: true,
      dry: false
    }
)
]
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: buildName + '.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader?modules'
          }, {
            loader: 'sass-loader'
          }],
            // 在开发环境使用 style-loader
          fallback: 'style-loader'
        })
      },
      {
        test: /.(jpg|gif|png)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `/resource/[name]/[name].[ext]`
            }
          }
        ],
        include: /resource/
      }, {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '//static.qiongqi.tech/resource/font/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: plugins,
  resolve: {
    alias: {
      Actions: path.resolve(workingDir, 'src/actions/'),
      Components: path.resolve(workingDir, 'src/components/'),
      Containers: path.resolve(workingDir, 'src/containers/'),
      Reducers: path.resolve(workingDir, 'src/reducers/'),
      Routes: path.resolve(workingDir, 'src/routes/'),
      Utils: path.resolve(workingDir, 'src/utils/'),
      Resource: path.resolve(workingDir, 'src/resource/'),
      Style: path.resolve(workingDir, 'src/style/')
    },
    extensions: ['.js', '.css']
  }
}
