module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env']
    }
  })
  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.mainFields = ['ts:main', 'main']

  return config
}
