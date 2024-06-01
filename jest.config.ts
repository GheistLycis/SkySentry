import { Config } from 'jest'

const config: Config = {
  cacheDirectory: '<rootDir>/testing/cache',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/app/**/*.{ts,html}',
    '!**/*.config.ts',
    '!**/*.routes.ts',
  ],
  coverageDirectory: '<rootDir>/testing/coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  globalSetup: 'jest-preset-angular/global-setup',
  maxWorkers: 1,
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/testing/setups/jest-angular.setup.ts',
    '<rootDir>/testing/setups/jest-dom.setup.ts',
  ],
  transform: {
    '^.+\\.(ts|js|html|svg)$': [
      'jest-preset-angular',
      {
        stringifyContentPathRegex: '\\.(html|svg)$',
        tsconfig: '<rootDir>/tsconfig.spec.json',
        useESM: true,
      },
    ],
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = config as Config
