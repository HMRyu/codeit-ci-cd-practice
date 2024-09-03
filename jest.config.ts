// jest.config.js
module.exports = {
  preset: 'ts-jest', // Use ts-jest to transform TypeScript files
  testEnvironment: 'node', // Sets the test environment to Node.js
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions Jest should handle
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to transform .ts and .tsx files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Adjust if using paths in tsconfig
  },
  extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ES modules
  globals: {
    'ts-jest': {
      useESM: true, // Enable ESM mode for ts-jest
    },
  },
};
