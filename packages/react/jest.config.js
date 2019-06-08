const jestBase = require('../../jest.config.js');

module.exports = {
  ...jestBase,
  setupFiles: [
    '<rootDir>/setupTests.js'
  ],
  testPathIgnorePatterns:[
    "/node_modules/", 
    "<rootDir>/.bit",  
    "<rootDir>/dist",
  ],
  
};
