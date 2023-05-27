import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ isSelected: boolean }>`
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray[500] : theme.colors.gray[300]};

  padding: 12px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
