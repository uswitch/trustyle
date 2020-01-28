module.exports = api => {
  api.cache(true)

  const presets = ['@babel/typescript', '@babel/preset-react']

  return {
    env: {
      test: {
        plugins: ['@babel/plugin-transform-modules-commonjs', 'require-context-hook']
      },
      development: {
        plugins: ['@babel/plugin-transform-modules-commonjs']
      }
    },
    presets
  }
}
