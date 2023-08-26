const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Output bundled JavaScript file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel for transpilation
          options: {
            presets: ['@babel/preset-react'],  // Use React preset
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // Serve content from 'public' directory
    },
    port: 3000,  // Port for dev server
    open: true,  // Open in default browser
  },
};
