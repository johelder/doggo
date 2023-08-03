import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  align-self: center;
  gap: 8px;

  border-radius: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray[300]};

  padding: 16px;
`;

export const HighlightedWarningContainer = styled.View<{
  isReadOnly?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  align-self: center;
  margin-left: ${({ isReadOnly }) => (isReadOnly ? 0 : 'auto')};
`;

export const HighlightedWarning = styled.Text<{ isNeedMaintenance: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme, isNeedMaintenance }) =>
    isNeedMaintenance
      ? theme.colors.attention[500]
      : theme.colors.success[500]};
`;

export const HighlightedLabel = styled.Text<{ isNeedMaintenance: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 12px;

  color: ${({ theme, isNeedMaintenance }) =>
    isNeedMaintenance
      ? theme.colors.attention[500]
      : theme.colors.success[500]};

  flex-shrink: 1;
`;

export const Session = styled.View`
  flex: 1;
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

  margin-top: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray[100]};

  border-radius: 15px;

  align-items: center;
  justify-content: center;

  margin-left: auto;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.gray[300]};
  margin: 8px 0;
`;
