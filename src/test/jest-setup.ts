import 'react-native-gesture-handler/jestSetup';
import '@react-native-google-signin/google-signin/jest/build/setup';
import './__mocks__/external/react-native-web-view';
import { setUpTests } from 'react-native-reanimated';

setUpTests();

jest.mock('@react-native-firebase/firestore', () => ({
  FieldValue: {
    serverTimestamp: () => ({
      seconds: 1705174420,
      nanoseconds: 327000000,
    }),
  },
}));
jest.mock('@react-native-firebase/crashlytics', () =>
  jest.fn().mockImplementation(() => ({ recordError: jest.fn })),
);
jest.mock('@react-native-firebase/auth', () => {});

jest.mock('@react-native-community/geolocation', () => ({
  addListener: jest.fn(),
  getCurrentPosition: jest.fn(),
  removeListeners: jest.fn(),
  requestAuthorization: jest.fn(),
  setConfiguration: jest.fn(),
  startObserving: jest.fn(),
  setRNConfiguration: jest.fn(),
  stopObserving: jest.fn(),
}));
