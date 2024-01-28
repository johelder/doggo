import { View } from 'react-native';

const WebView = () => View;

jest.mock('react-native-webview', () => {
  return {
    WebView,
    default: WebView,
    __esModule: true,
  };
});
