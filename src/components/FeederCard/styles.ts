import styled from 'styled-components/native';

export const Container = styled.View`
  gap: ${({ theme }) => theme.spacings.sm}px;
  padding: ${({ theme }) => theme.spacings.md}px;

  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
`;

export const HighlightedWarningContainer = styled.View<{
  hasActionButton?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;

  align-self: center;
  margin-left: ${({ hasActionButton }) => (hasActionButton ? 'auto' : 0)};
`;

export const HighlightedWarning = styled.Text<{ isNeedMaintenance: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.sm}px;

  color: ${({ theme, isNeedMaintenance }) =>
    isNeedMaintenance ? theme.colors.red[500] : theme.colors.green[500]};
`;

export const Session = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;

export const Title = styled.Text`
  flex-shrink: 1;

  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.sm}px;
  line-height: ${({ theme }) => theme.spacings.md}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const SubTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Actions = styled.View`
  flex-shrink: 1;
  gap: ${({ theme }) => theme.spacings.sm}px;

  margin-top: ${({ theme }) => theme.spacings.sm}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
