import React from 'react';

import { Loader } from '@components';

import * as Styled from './styles';

export function TermsOfUse(): React.JSX.Element {
  return (
    <Styled.Container
      source={{ uri: 'https://doggoapp.com.br/terms-of-use' }}
      startInLoadingState
      renderLoading={() => (
        <Styled.LoadingContainer>
          <Loader.Component />
        </Styled.LoadingContainer>
      )}
    />
  );
}
