process.env.IN_STORYBOOK = true

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env']
    }
  })
  config.resolve.extensions.push('.ts', '.tsx')

  if (process.env.DONT_USE_TS_MAIN !== 'true') {
    config.resolve.mainFields = ['ts:main', 'main']
  }

  //   config.module.rules.forEach(rule => {
  //     if (rule.test.toString().includes('svg')) {
  //       if (!rule.exclude) {
  //         rule.exclude = []
  //       }

  //       rule.exclude.push(/themed-icon\/src\/icons\/.+\.svg$/)
  //     }
  //   })

  return config
}
