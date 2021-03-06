/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'
const spriteLoaderOptions = {}

module.exports = {
  mode,
  entry: './src/index.tsx',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'umd react',
    'theme-ui': 'umd theme-ui'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /themed-icon\/src\/icons\/.+\.svg$/,
        use: [
          { loader: 'svg-sprite-loader', options: spriteLoaderOptions },
          'svg-transform-loader',
          {
            loader: 'svgo-loader',
            options: { plugins: [{ convertColors: { currentColor: true } }] }
          }
        ]
      }
    ]
  }
}

if (mode === 'production' && !process.env.IN_STORYBOOK) {
  module.exports.plugins = [new SpriteLoaderPlugin()]
  spriteLoaderOptions.extract = true
}
