import React from 'react';

import { NavigationButton } from '@src/components';

import * as S from './styles';

export function Profile() {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.ProfilePhotoContainer>
          <S.ProfilePhoto source={{ uri: 'https://github.com/johelder.png' }} />
        </S.ProfilePhotoContainer>

        <S.ProfileName>Johelder Humberto</S.ProfileName>
      </S.HeaderContainer>

      <S.MainContent>
        <NavigationButton
          title="Comedouros"
          description="Minha central de comedouros"
          icon={() => <S.FeederIcon />}
        />

        <NavigationButton
          title="Favoritos"
          description="Meus comedouros favoritos"
          icon={() => <S.FavoriteIcon />}
        />
      </S.MainContent>
    </S.Container>
  );
}
