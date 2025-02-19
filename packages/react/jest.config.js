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
  transformIgnorePatterns: [
    'node_modules/(?!@bit/)',
  ],
  testPathIgnorePatterns:[
    "/node_modules/", 
    "<rootDir>/src/*/.bit",  
    "<rootDir>/src/*/dist",
  ],
  collectCoverage: true,
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components',
  },
};
