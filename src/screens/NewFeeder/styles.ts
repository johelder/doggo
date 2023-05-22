import styled from 'styled-components/native';

export const Container = styled.View``;

export const CalloutContainer = styled.View`
  margin-bottom: 14px;
`;

export const CalloutContent = styled.View`
  background-color: ${({ theme }) => theme.colors.utils.white};
  align-items: center;
  padding: 16px 22px;

  border-radius: 8px;
`;

export const CalloutTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const CalloutDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ToolTipTriangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 10px;
  border-right-width: 10px;
  border-top-width: 14px;
  border-style: solid;
  background-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${({ theme }) => theme.colors.utils.white};
  align-self: center;
`;
