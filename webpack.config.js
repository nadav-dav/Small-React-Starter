module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + '/public/js',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"],}
    ]
  }
};