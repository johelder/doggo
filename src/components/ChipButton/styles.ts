import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ isSelected: boolean }>`
  border-width: 1px;
  border-radius: ${({ theme }) => theme.sizes.xxsm}px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.orange[500] : theme.colors.gray[500]};

  padding: ${({ theme }) => theme.spacings.sm}px 0px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;
