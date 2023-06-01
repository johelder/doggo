import React from 'react';
import { useTheme } from 'styled-components';

import MapPin from 'phosphor-react-native/src/icons/MapPin';
import User from 'phosphor-react-native/src/icons/User';
import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import Signpost from 'phosphor-react-native/src/icons/Signpost';
import CaretDown from 'phosphor-react-native/src/icons/CaretDown';
import CaretUp from 'phosphor-react-native/src/icons/CaretUp';
import PushPin from 'phosphor-react-native/src/icons/PushPin';
import Heart from 'phosphor-react-native/src/icons/Heart';

import { useFeederCard } from './useFeederCard';
import type { IFeederCardProps } from './types';

import * as S from './styles';

export function FeederCard({
  sideButton,
  isReadOnly = true,
}: IFeederCardProps) {
  const { isCollapsed, handleToggleCollapseSession } = useFeederCard();

  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <S.LabelContainer>
          <MapPin color={theme.colors.gray[700]} size={24} />
          <S.Title>Rua da Opala, 356, Dom Avelar, Petrolina (500m)</S.Title>
        </S.LabelContainer>

        {sideButton}
      </S.Header>

      <>
        <S.LabelContainer>
          <User color={theme.colors.gray[500]} size={24} />
          <S.Label>Comedouro de Johelder - Casa</S.Label>
        </S.LabelContainer>

        <S.LabelContainer>
          <CookingPot color={theme.colors.gray[500]} size={24} />
          <S.Label>Comida para gatos e cachorros</S.Label>
        </S.LabelContainer>
      </>

      {true && (
        <>
          <S.CollapseButton onPress={handleToggleCollapseSession}>
            {isCollapsed ? (
              <CaretUp weight="bold" color={theme.colors.gray[500]} size={20} />
            ) : (
              <CaretDown
                weight="bold"
                color={theme.colors.gray[500]}
                size={20}
              />
            )}
          </S.CollapseButton>

          {isCollapsed && (
            <S.LabelContainer>
              <PushPin color={theme.colors.gray[500]} size={24} />
              <S.Label>Próximo ao ponto de ônibus</S.Label>
            </S.LabelContainer>
          )}
        </>
      )}

      {!isReadOnly && (
        <S.ButtonsContainer>
          <S.ActionButton>
            <Signpost color={theme.colors.gray[500]} size={24} />
            <S.Label>Ver rotas</S.Label>
          </S.ActionButton>

          <S.ActionButton>
            <Heart color={theme.colors.gray[500]} size={24} />
            <S.Label>Favoritar</S.Label>
          </S.ActionButton>
        </S.ButtonsContainer>
      )}
    </S.Container>
  );
}
