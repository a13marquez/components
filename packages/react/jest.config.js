const jestBase = require('../../jest.config.js');

module.exports = {
  ...jestBase,
  setupFilesAfterEnv: [
    '<rootDir>/enzymeConfig.js'
  ],
  testPathIgnorePatterns:[
    "/node_modules/", 
    "<rootDir>/.bit",  
    "<rootDir>/dist",
  ],
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components',
  }
};
