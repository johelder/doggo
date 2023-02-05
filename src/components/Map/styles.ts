import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

export const Container = styled.View``;

export const Map = styled(MapView)`
  min-width: ${Dimensions.get('screen').width}px;
  min-height: ${Dimensions.get('screen').height}px;
`;
