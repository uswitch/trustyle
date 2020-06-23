/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode,
  entry: './src/index.tsx',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
  },
  externals: {
    react: 'umd react',
    'theme-ui': 'umd theme-ui'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}
