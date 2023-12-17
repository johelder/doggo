import styled from 'styled-components/native';

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const CustomCalloutContainer = styled.View`
  width: 90%;

  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: ${({ theme }) => theme.sizes.xxxsm}px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacings.xlg}px;
  height: ${({ theme }) => theme.spacings.xlg}px;
  background-color: ${({ theme }) => theme.colors.gray[100]};

  border-radius: ${({ theme }) => theme.sizes.xmd}px;

  align-items: center;
  justify-content: center;

  margin-left: auto;
`;
