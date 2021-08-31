const path = require('path')

let stories = ['../src/**/*.stories.js', '../src/**/stories.tsx']

if (process.env.STORYBOOK_ONLY_CHANGED) {
  const changed = require('./changed.json')
  stories = changed.map(package => `${package.location}/**/*stories.*`)
  console.log(`[STORYBOOK] building stories`, JSON.stringify(stories, 0, 2))
}

module.exports = {
  stories,
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      '@emotion/core': path.resolve(
        __dirname,
        '../node_modules/@emotion/react'
      ),
      '@emotion/styled': path.resolve(
        __dirname,
        '../node_modules/@emotion/styled'
      ),
      'emotion-theming': path.resolve(
        __dirname,
        '../node_modules/@emotion/react'
      )
    }
    return config
  }
}
