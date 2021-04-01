module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  modulePathIgnorePatterns: ["protocols"],
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};
