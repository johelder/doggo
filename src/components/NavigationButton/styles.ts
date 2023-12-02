import { StyleSheet } from 'react-native';

import CaretRight from 'phosphor-react-native/src/icons/CaretRight';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: ${({ theme }) => theme.spacings.xxsm}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;

  padding: ${({ theme }) => theme.spacings.md}px 0px;
`;

export const TitlesContainer = styled.View`
  margin-left: ${({ theme }) => theme.spacings.md}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.xsm}px;

  color: ${({ theme }) => theme.colors.gray[500]};

  flex-shrink: 1;
`;

export const ArrowRight = styled(CaretRight).attrs(({ theme }) => ({
  size: theme.sizes.xlg,
  color: theme.colors.gray[500],
}))``;
