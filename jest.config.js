module.exports = {
  transform: {
    '^.+\\.?stories\\.[jt]sx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/style-mock.js'
  },
  setupFiles: ['<rootDir>/.storybook/jest-register-context.js']
}
