import styled from 'styled-components/native';
import MapPin from 'phosphor-react-native/src/icons/MapPin';

export const Container = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TooltipContainer = styled.View`
  position: absolute;
  bottom: 100%;
  margin-bottom: 10px;
`;

export const TooltipContent = styled.View`
  background-color: ${({ theme }) => theme.colors.utils.white};
  align-items: center;
  padding: 16px 22px;

  border-radius: 8px;

  shadow-color: ${({ theme }) => theme.colors.utils.shadow};
  shadow-offset: 1px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 2;
`;

export const TooltipTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const TooltipDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const TooltipTriangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 10px;
  border-right-width: 10px;
  border-top-width: 14px;
  border-style: solid;
  background-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${({ theme }) => theme.colors.utils.white};
  align-self: center;
`;

export const Marker = styled(MapPin).attrs(({ theme }) => ({
  weight: 'fill',
  size: 42,
  color: theme.colors.primary[500],
}))`
  margin-bottom: 21px;
`;
