import WebView from 'react-native-webview';
import styled from 'styled-components/native';

export const Container = styled(WebView)`
  flex: 1;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
