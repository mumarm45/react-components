module.exports = {
  cacheDirectory: '.jest-cache',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts',
  },
  setupFilesAfterEnv: ['./jest.global.js', 'jest-extended', '@testing-library/jest-dom'],
  snapshotSerializers: ['./jestSetup.js'],
  globals: {
    componentHandler: true,
    ext: true,
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  coverageReporters: ['lcov', 'text'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: [
    ['default', {}],
    [
      'jest-slow-test-reporter',
      {
        numTests: 50,
        warnOnSlowerThan: 500,
        color: true,
      },
    ],
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
      },
    ],
  ],
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}', 'src/hooks/**/*.{js,jsx,ts,tsx}', '!dist/**'],
  coveragePathIgnorePatterns: [],
};
