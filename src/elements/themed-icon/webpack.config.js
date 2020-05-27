// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  mode: 'development', // @todo CHANGE THIS
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'ThemedIcon',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'commonjs2 react',
    'theme-ui': 'commonjs2 theme-ui'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}
