import styled from 'styled-components/native';

export const FormContent = styled.View`
  margin: ${({ theme }) => theme.spacings.lg}px 0px
    ${({ theme }) => theme.spacings.lg}px;
`;

export const InputsWrapper = styled.View`
  flex-direction: row;

  gap: ${({ theme }) => theme.spacings.md}px;
  margin: ${({ theme }) => theme.spacings.lg}px 0px;
`;

export const ChipsWrapper = styled.View`
  flex-direction: row;

  gap: ${({ theme }) => theme.spacings.md}px;
`;

export const ChipButtonContainer = styled.View`
  flex: 1;
`;

export const FieldDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.sm}px;

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-top: ${({ theme }) => theme.spacings.sm}px;
`;

export const ChipButtonLabel = styled.Text<{ isSelected?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme, isSelected = true }) =>
    isSelected ? theme.colors.orange[500] : theme.colors.gray[500]};
`;

export const Label = styled(ChipButtonLabel)`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const FormFooter = styled.View`
  margin: ${({ theme }) => theme.spacings.md}px 0px;
  gap: ${({ theme }) => theme.spacings.md}px;
`;
