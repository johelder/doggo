import { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-setup.ts'],
  setupFiles: ['<rootDir>/src/test/jest-setup.ts'],
  collectCoverageFrom: [
    'src/{components,utils,hooks,domain,screens}/**/*.{js,jsx,ts,tsx}',
  ],
  modulePathIgnorePatterns: ['.*/__mocks__/.*', 'e2e/'],
  moduleDirectories: ['node_modules', './src/test'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-reanimated|@react-navigation)|react-native-map-clustering/)',
  ],

  moduleNameMapper: {
    '\\.svg':
      '<rootDir>/src/test/__mocks__/external/react-native-svg-transformer.ts',
  },
};

export default config;
