import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: ${({ theme }) => theme.spacings.xlg}px;
`;

export const Header = styled.View`
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings.md}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.spacings.xmd}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.xsm}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacings.sm}px;

  margin: ${({ theme }) => theme.spacings.xlg}px 0px
    ${({ theme }) => theme.spacings.md}px;
`;
