import styled from 'styled-components/native';

export const FormContent = styled.View`
  margin: 26px 0 26px;
`;

export const InputsWrapper = styled.View`
  flex-direction: row;

  gap: 16px;
  margin-top: 26px;
`;

export const InputContainer = styled.View<{ flex: number }>`
  flex: ${({ flex }) => flex};
`;

export const ChipsWrapper = styled.View`
  flex-direction: row;

  gap: 16px;
`;

export const ChipButtonContainer = styled.View`
  flex: 1;
`;

export const FieldDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-top: 10px;
`;

export const ChipButtonLabel = styled.Text<{ isSelected?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme, isSelected = true }) =>
    isSelected ? theme.colors.primary[500] : theme.colors.gray[500]};
`;

export const Label = styled(ChipButtonLabel)`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const FormFooter = styled.View`
  margin: 16px 0;
  gap: 16px;
`;
