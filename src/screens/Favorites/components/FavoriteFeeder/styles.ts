import styled from 'styled-components/native';

export const FeederCardContainer = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const FavoriteButton = styled.TouchableOpacity`
  margin-left: auto;
`;
