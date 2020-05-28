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

  config.module.rules.forEach(rule => {
    if (rule.test.toString().includes('svg')) {
      if (!rule.exclude) {
        rule.exclude = []
      }

      rule.exclude.push(/icons\/.+\.svg$/)
    }
  })

  // @todo import from other webpack.config.json
  config.module.rules.push({
    test: /icons\/.+\.svg$/,
    use: [
      { loader: 'svg-sprite-loader', options: {} },
      'svg-transform-loader',
      {
        loader: 'svgo-loader',
        options: { plugins: [{ convertColors: { currentColor: true } }] }
      }
    ]
  })

  return config
}
