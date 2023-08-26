import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 0 32px;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const IconContainer = styled.View<{ color?: string }>`
  width: 40px;
  height: 40px;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.gray[200]};
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;
