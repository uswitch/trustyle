module.exports = {
  transform: {
    '^.+\\.?stories\\.[jt]sx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/style-mock.js'
  }
}
