const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test:  /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader', 
                options: {
                  name: '[name].[hash].[ext]',
                  outputPath: 'images' ,
                }
              }
            ]
          }
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
      ],
      devServer: {
        static:{
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 5555,
      },
      mode: 'development',
}