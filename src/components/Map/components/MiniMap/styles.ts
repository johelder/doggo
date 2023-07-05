import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

export const Container = styled(MapView)`
  min-width: ${Dimensions.get('screen').width}px;
  height: 100px;
`;
