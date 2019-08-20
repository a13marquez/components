const jestBase = require('../../jest.config.js');

module.exports = {
  ...jestBase,
  setupFilesAfterEnv: [
    '<rootDir>/enzymeConfig.js'
  ],
  transform: {
    '^.+\\.ts[x]?$': 'ts-jest',
    '^.+\\.js[x]?$': 'babel-jest'
  },
  testPathIgnorePatterns:[
    "/node_modules/", 
    "<rootDir>/.bit",  
    "<rootDir>/dist",
  ],
  collectCoverage: true,
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components',
  }
};
