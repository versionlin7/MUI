const path = require('path')

module.exports = {
  // mode: 'development',
  entry: {
    MDR: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),//根据操作系统类型将两个目录连起来
    library: 'MUI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.s([ac])ss$/,
        use: ['style-loader', 'css-loader', "sass-loader"]
      }
    ]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'MUI',
  //     template: 'index.html'
  //   })
  // ],
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React',
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',
  //     root: 'ReactDOM',
  //   }
  // }
}