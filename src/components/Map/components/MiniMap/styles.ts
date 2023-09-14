import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled(MapView)`
  min-width: ${Dimensions.get('screen').width}px;
  height: 100px;
`;
