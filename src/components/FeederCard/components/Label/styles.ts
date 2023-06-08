import styled from 'styled-components/native';

export const Container = styled.Text<{ isTitle: boolean }>`
  font-family: ${({ theme, isTitle }) =>
    theme.fonts.primary[isTitle ? 'semiBold' : 'medium']};
  font-size: 14px;
  line-height: 20px;

  flex: 8;

  color: ${({ theme, isTitle }) => theme.colors.gray[isTitle ? 700 : 500]};
`;
