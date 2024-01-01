import styled from 'styled-components/native';

export const NearFeedersContainer = styled.View<{ tabBarHeight: number }>`
  width: 100%;

  position: absolute;
  bottom: 0;

  padding: ${({ theme }) => theme.spacings.md}px 0px
    ${({ tabBarHeight }) => tabBarHeight + 60}px;
  background-color: ${({ theme }) => theme.colors.gray[0]};

  border-top-right-radius: ${({ theme }) => theme.sizes.xmd}px;
  border-top-left-radius: ${({ theme }) => theme.sizes.xmd}px;
`;
