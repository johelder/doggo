import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 8px;
  padding: 16px;

  border-radius: 4px;
`;

export const HighlightedWarningContainer = styled.View<{
  hasActionButton?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  align-self: center;
  margin-left: ${({ hasActionButton }) => (hasActionButton ? 'auto' : 0)};
`;

export const HighlightedWarning = styled.Text<{ isNeedMaintenance: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 12px;

  color: ${({ theme, isNeedMaintenance }) =>
    isNeedMaintenance
      ? theme.colors.attention[500]
      : theme.colors.success[500]};
`;

export const Session = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
  flex-shrink: 1;

  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 12px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const SubTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Actions = styled.View`
  flex-shrink: 1;
  gap: 8px;

  margin-top: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
