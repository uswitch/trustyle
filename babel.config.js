module.exports = api => {
  api.cache(true)

  return {
    env: {
      test: {
        plugins: [
          '@babel/plugin-transform-modules-commonjs',
          'require-context-hook'
        ]
      },
      development: {
        plugins: ['@babel/plugin-transform-modules-commonjs']
      }
    },
    presets: ['@babel/typescript', '@babel/preset-react'],
    plugins: ['@emotion', '@babel/plugin-proposal-optional-chaining'],
    sourceType: 'unambiguous'
  }
}
