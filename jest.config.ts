import { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  collectCoverageFrom: [
    'src/{components,utils,hooks,domain,screens}/**/*.{js,jsx,ts,tsx}',
  ],
  modulePathIgnorePatterns: ['.*/mocks/.*'],
};

export default config;
