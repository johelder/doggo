import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import CaretRight from 'phosphor-react-native/src/icons/CaretRight';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: 5px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
`;

export const TitlesContainer = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ArrowRight = styled(CaretRight).attrs(({ theme }) => ({
  size: 22,
  color: theme.colors.gray[500],
  weight: 'bold',
}))``;
