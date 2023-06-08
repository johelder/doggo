import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Session = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  flex: 8;
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
