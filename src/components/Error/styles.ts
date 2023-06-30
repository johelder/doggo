import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.utils.white};

  padding: 16px;
`;

export const Title = styled.Text`
  width: 80%;

  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.attention[500]};

  margin-top: 24px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;

  margin: 0 16px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray[700]};

  margin-top: 12px;
`;

export const Highlighted = styled(Label)`
  color: ${({ theme }) => theme.colors.secondary[600]};
`;
