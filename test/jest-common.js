const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    path.join(__dirname, '../test'),
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
