module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['api/util/**/*.js'],
  testMatch: ['**/tests/**/*.js?(x)', '**/?(*.)+(spec).js?(x)'],
};
