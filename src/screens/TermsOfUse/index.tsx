import React from 'react';

import { Loader } from '@components';

import * as S from './styles';

export function TermsOfUse(): React.JSX.Element {
  return (
    <S.Container
      source={{ uri: 'https://doggoapp.com.br/terms-of-use' }}
      startInLoadingState
      renderLoading={() => (
        <S.LoadingContainer>
          <Loader.Component />
        </S.LoadingContainer>
      )}
    />
  );
}
