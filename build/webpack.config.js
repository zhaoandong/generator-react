var path = require('path')
var workingDir = process.cwd()

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/assets/'
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
        test: /\.(scss|css)$/,
        use: [{
          loader: 'style-loader' // 将 JS 字符串生成为 style 节点
        }, {
          loader: 'css-loader?modules' // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: 'sass-loader' // 将 Sass 编译成 CSS
        }]
      },
      {
        test: /.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: `resource/[name]/[name].[ext]`
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
              name: 'resource/font/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
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
