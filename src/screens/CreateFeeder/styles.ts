import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.SafeAreaView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const MapPreview = styled(MapView)`
  min-width: ${Dimensions.get('screen').width}px;
  height: 100px;
`;

export const FormContainer = styled.View`
  padding: 24px 15px 15px;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  background-color: ${({ theme }) => theme.colors.utils.white};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

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

export const Label = styled.Text<{ isSelected?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  color: ${({ theme, isSelected = true }) =>
    isSelected ? theme.colors.gray[500] : theme.colors.gray[300]};
`;

export const FormFooter = styled.View`
  margin-top: 16px;
  gap: 16px;
`;
