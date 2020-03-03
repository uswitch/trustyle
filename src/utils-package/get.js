// Use typescript version if available so that we benefit from hot module
// reloading during development
try {
  module.exports = require('./src/get')
} catch (e) {
  module.exports = require('./lib/get')
}
