import React from 'react';

import { Loader } from '@components';

import * as Styled from './styles';

export function PrivacyPolicy(): React.JSX.Element {
  return (
    <Styled.Container
      source={{ uri: 'https://doggoapp.com.br/privacy-policy' }}
      startInLoadingState
      renderLoading={() => (
        <Styled.LoadingContainer>
          <Loader.Component />
        </Styled.LoadingContainer>
      )}
    />
  );
}
