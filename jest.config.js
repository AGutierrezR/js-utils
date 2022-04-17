module.exports = {
  setupFilesAfterEnv: ['jest-extended/all'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
}
