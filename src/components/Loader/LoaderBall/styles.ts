import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Ball = styled(Animated.View)`
  width: ${({ theme }) => theme.sizes.xxsm}px;
  height: ${({ theme }) => theme.sizes.xxsm}px;
  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
`;
