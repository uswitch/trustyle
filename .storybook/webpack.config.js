module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: ["@babel/typescript", "@babel/preset-react"]
    }
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
