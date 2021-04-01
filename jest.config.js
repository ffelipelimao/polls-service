module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  modulePathIgnorePatterns: ["protocols"],
  preset: '@shelf/jest-mongodb',
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};
