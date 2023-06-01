import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray[300]};

  gap: 6px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const CollapseButton = styled.TouchableOpacity`
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 8px;

  margin-top: 16px;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 0;

  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray[500]};
`;
