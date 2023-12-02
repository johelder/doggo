import { Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const MapPreview = styled(MapView)`
  min-width: ${Dimensions.get('screen').width}px;
  height: 100px;
`;

export const FormContainer = styled.View`
  padding: ${({ theme }) => theme.spacings.lg}px
    ${({ theme }) => theme.spacings.md}px ${({ theme }) => theme.spacings.md}px;

  border-top-right-radius: ${({ theme }) => theme.sizes.xsm}px;
  border-top-left-radius: ${({ theme }) => theme.sizes.xsm}px;

  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const FormContent = styled.View`
  margin: ${({ theme }) => theme.spacings.lg}px 0px
    ${({ theme }) => theme.spacings.lg}px;
`;

export const InputsWrapper = styled.View`
  flex-direction: row;

  gap: ${({ theme }) => theme.spacings.md}px;
  margin-top: ${({ theme }) => theme.spacings.lg}px;
`;

export const InputContainer = styled.View<{ flex: number }>`
  flex: ${({ flex }) => flex};
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
  font-size: ${({ theme }) => theme.sizes.xsm}px;

  color: ${({ theme }) => theme.colors.gray[500]};

  margin-top: ${({ theme }) => theme.spacings.sm}px;
`;

export const Label = styled.Text<{ isSelected?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: ${({ theme }) => theme.sizes.md}px;

  color: ${({ theme, isSelected = true }) =>
    isSelected ? theme.colors.gray[500] : theme.colors.gray[300]};
`;

export const FormFooter = styled.View`
  margin-top: ${({ theme }) => theme.spacings.md}px;
  gap: ${({ theme }) => theme.spacings.md}px;
`;
