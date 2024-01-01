import styled from 'styled-components/native';

export const MapContainer = styled.View<{
  hasNearFeeders: boolean;
  isNearFeederListExpanded: boolean;
}>`
  height: ${({ hasNearFeeders, isNearFeederListExpanded }) =>
    hasNearFeeders && isNearFeederListExpanded ? '60%' : '100%'};
`;
