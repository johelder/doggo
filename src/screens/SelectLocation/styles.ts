import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const CalloutContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.spacings.md}px;
`;

export const CalloutContent = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  align-items: center;
  padding: ${({ theme }) => theme.spacings.md}px
    ${({ theme }) => theme.spacings.xmd}px;

  border-radius: ${({ theme }) => theme.sizes.xxsm}px;
`;

export const CalloutTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.sm}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const CalloutDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.sm}px;
  line-height: ${({ theme }) => theme.spacings.md}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ToolTipTriangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: ${({ theme }) => theme.sizes.xsm}px;
  border-right-width: ${({ theme }) => theme.sizes.xsm}px;
  border-top-width: ${({ theme }) => theme.sizes.md}px;
  border-style: solid;
  background-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${({ theme }) => theme.colors.gray[0]};
  align-self: center;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacings.md}px;
  left: 0;
  right: 0;

  margin: 0px ${({ theme }) => theme.spacings.md}px;
`;
