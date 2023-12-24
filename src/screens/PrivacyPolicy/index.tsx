import React from 'react';

import { Loader } from '@components';

import * as S from './styles';

export function PrivacyPolicy(): React.JSX.Element {
  return (
    <S.Container
      source={{ uri: 'https://doggoapp.com.br/privacy-policy' }}
      startInLoadingState
      renderLoading={() => (
        <S.LoadingContainer>
          <Loader.Component />
        </S.LoadingContainer>
      )}
    />
  );
}
