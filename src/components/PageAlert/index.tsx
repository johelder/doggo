import React from 'react';
import { View } from 'react-native';

import * as Styled from './styles';
import { PageAlertProps } from './types';

export function PageAlert({
  title,
  description,
  icon,
  color,
  actionButton,
}: PageAlertProps): React.JSX.Element {
  return (
    <Styled.Container>
      <Styled.IconContainer color={color}>{icon}</Styled.IconContainer>

      <View>
        <Styled.Title>{title}</Styled.Title>
        {description && <Styled.Description>{description}</Styled.Description>}
      </View>

      {actionButton}
    </Styled.Container>
  );
}
