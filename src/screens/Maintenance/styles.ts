import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.secondary[600]};

  align-items: center;
  justify-content: center;

  gap: 10px;
`;

export const WarningLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;
  line-height: 20px;

  align-self: flex-start;

  color: ${({ theme }) => theme.colors.utils.white};
`;

export const Main = styled.View`
  padding: 16px;

  flex: 1;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.View`
  gap: 24px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.Text<{ isSelected: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 14px;

  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray[700] : theme.colors.gray[500]};
`;
