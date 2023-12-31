import React from 'react';

import { Icon } from '../Icon';

import * as Styled from './styles';
import { NavigationButtonProps } from './types';

export function NavigationButton({
  title,
  description,
  icon: IconComponent,
  ...rest
}: NavigationButtonProps): React.JSX.Element {
  return (
    <Styled.Container {...rest}>
      <Styled.Content>
        {IconComponent && <IconComponent />}

        <Styled.TitlesContainer>
          <Styled.Title>{title}</Styled.Title>

          {description && (
            <Styled.Description>{description}</Styled.Description>
          )}
        </Styled.TitlesContainer>
      </Styled.Content>

      <Icon name="caretRight" />
    </Styled.Container>
  );
}
