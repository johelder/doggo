import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${({ theme }) => theme.spacings.sm}px;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;

export const Label = styled.Text<{ appearance: string }>`
  flex-shrink: 1;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme, appearance }) =>
    appearance === 'dark' ? theme.colors.gray[700] : theme.colors.gray[500]};
`;
