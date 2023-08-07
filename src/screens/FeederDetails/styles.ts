import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const CustomHeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Header = styled.View`
  padding: 16px;
  gap: 12px;
`;

export const HighlightedWarningContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  align-self: center;
  margin-bottom: 4px;
`;

export const HighlightedWarning = styled.Text<{ isNeedMaintenance: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;

  color: ${({ theme, isNeedMaintenance }) =>
    isNeedMaintenance
      ? theme.colors.attention[500]
      : theme.colors.success[500]};
`;

export const WarningLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
  line-height: 20px;

  align-self: flex-start;

  color: ${({ theme }) => theme.colors.utils.white};
`;

export const Main = styled.View`
  flex: 1;
  padding: 16px;
  gap: 12px;
`;

export const ButtonsContainer = styled.View``;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.Text`
  flex-shrink: 1;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  margin: 4px 0;
`;

export const Title = styled.Text<{ appearance: string }>`
  flex-shrink: 1;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;

  color: ${({ theme, appearance }) =>
    appearance === 'dark' ? theme.colors.gray[700] : theme.colors.gray[500]};
`;

export const DoubtButton = styled.TouchableOpacity`
  width: 22px;
  height: 22px;

  border-radius: 11px;

  background-color: ${({ theme }) => theme.colors.gray[700]};

  align-items: center;
  justify-content: center;
`;

export const DoubtLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.utils.white};
  position: relative;
`;

export const TooltipContainer = styled.TouchableOpacity`
  min-width: 180px;
  position: absolute;
  bottom: 100%;

  padding: 8px;
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 4px;
`;

export const TooltipLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 10px;

  color: ${({ theme }) => theme.colors.utils.white};
  text-align: center;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};

  margin: 8px 16px 0;
`;
