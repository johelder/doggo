import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 8px 0;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray[500]};
`;
