const path = require('path')
const fs = require('fs')

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      )
    }
    currDir = dir
  }
}

let stories = ['../src/**/*.stories.js', '../src/**/stories.tsx']

if (process.env.STORYBOOK_ONLY_CHANGED) {
  const changed = require('./changed.json')
  stories = changed.map(package => `${package.location}/**/*stories.*`)
  console.log(`[STORYBOOK] building stories`, JSON.stringify(stories, 0, 2))
}

module.exports = {
  stories,
  typescript: {
    reactDocgen: 'none'
  },
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      '@emotion/core': getPackageDir('@emotion/react'),
      '@emotion/styled': getPackageDir('@emotion/styled'),
      'emotion-theming': getPackageDir('@emotion/react')
    }
    return config
  }
}
