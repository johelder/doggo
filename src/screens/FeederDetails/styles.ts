import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const CustomHeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Header = styled.View`
  padding: ${({ theme }) => theme.spacings.md}px;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;

export const HighlightedWarningContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  gap: ${({ theme }) => theme.spacings.sm}px;

  margin-bottom: ${({ theme }) => theme.spacings.xxsm}px;
`;

export const HighlightedWarning = styled.Text<{ isNeedMaintenance: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme, isNeedMaintenance }) =>
    isNeedMaintenance ? theme.colors.red[500] : theme.colors.green[500]};
`;

export const WarningLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.spacings.xmd}px;

  align-self: flex-start;

  color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Main = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacings.md}px;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;

export const ButtonsContainer = styled.View``;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${({ theme }) => theme.spacings.sm}px;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;
`;

export const Label = styled.Text`
  flex-shrink: 1;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;
  line-height: ${({ theme }) => theme.sizes.xlg}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;

  margin: ${({ theme }) => theme.spacings.xxsm}px 0px;
`;

export const Title = styled.Text<{ appearance: string }>`
  flex-shrink: 1;
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme, appearance }) =>
    appearance === 'dark' ? theme.colors.gray[700] : theme.colors.gray[500]};
`;

export const DoubtButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.sizes.xlg}px;
  height: ${({ theme }) => theme.sizes.xlg}px;

  border-radius: ${({ theme }) => theme.sizes.xlg / 2}px;

  background-color: ${({ theme }) => theme.colors.gray[700]};

  align-items: center;
  justify-content: center;
`;

export const DoubtLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[0]};
  position: relative;
`;

export const TooltipContainer = styled.TouchableOpacity`
  min-width: 180px;
  position: absolute;
  bottom: 100%;

  padding: ${({ theme }) => theme.spacings.sm}px;
  margin-bottom: ${({ theme }) => theme.spacings.sm}px;

  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
`;

export const TooltipLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.xsm}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};

  margin: ${({ theme }) => theme.spacings.sm}px
    ${({ theme }) => theme.spacings.md}px 0px;
`;
