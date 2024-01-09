import { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-setup.ts'],
  setupFiles: ['<rootDir>/src/test/jest-setup.ts'],
  collectCoverageFrom: ['src/{components,utils,hooks}/**/*.{js,jsx,ts,tsx}'],
  modulePathIgnorePatterns: ['.*/__mocks__/.*'],
  moduleDirectories: ['node_modules', './src/test'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-reanimated)/)',
  ],
};

export default config;
