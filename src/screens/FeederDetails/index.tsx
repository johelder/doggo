import React, { useCallback, useLayoutEffect } from 'react';
import { useTheme } from 'styled-components';

import Repeat from 'phosphor-react-native/src/icons/Repeat';
import ToiletPaper from 'phosphor-react-native/src/icons/ToiletPaper';
import Gear from 'phosphor-react-native/src/icons/Gear';
import CheckCircle from 'phosphor-react-native/src/icons/CheckCircle';
import Info from 'phosphor-react-native/src/icons/Info';
import Users from 'phosphor-react-native/src/icons/Users';
import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import Signpost from 'phosphor-react-native/src/icons/Signpost';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import Heart from 'phosphor-react-native/src/icons/Heart';

import { Button, Checkbox, Loader } from '@src/components';
import { getFoodsLabel } from '@src/utils';
import { useFeederDetails } from './useFeederDetails';

import type { IFeederDetailsProps } from './types';

import * as S from './styles';
import { useFavorite } from '@src/hooks';

export function FeederDetails({ navigation }: IFeederDetailsProps) {
  const {
    feeder,
    handleToggleMaintenanceStatus,
    isStatusAdded,
    handleUpdateFeederMaintenance,
    pageStatus,
    formattedUserName,
    isNeedMaintenance,
    lastUpdated,
    isTooltipVisible,
    handleToggleTooltip,
    estimatedDistanceUntilTheFeeder,
    handleOpenDirections,
  } = useFeederDetails();
  const { isFavorite, handleToggleFavoriteFeeder } = useFavorite();

  const theme = useTheme();

  const renderCustomHeaderTitle = useCallback(() => {
    if (pageStatus === 'loading') {
      return '';
    }

    return (
      <S.CustomHeaderTitle>
        {`COMEDOURO DE ${formattedUserName}`}
      </S.CustomHeaderTitle>
    );
  }, [formattedUserName, pageStatus]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: renderCustomHeaderTitle,
    });
  }, [navigation, renderCustomHeaderTitle]);

  if (pageStatus === 'loading') {
    return <Loader.Page />;
  }

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.HighlightedWarningContainer>
            {isNeedMaintenance ? (
              <Info color={theme.colors.attention[500]} />
            ) : (
              <CheckCircle color={theme.colors.success[500]} />
            )}
            <S.HighlightedWarning isNeedMaintenance={isNeedMaintenance}>
              {isNeedMaintenance
                ? 'Precisando de manutenção'
                : 'Manutenção em dias'}
            </S.HighlightedWarning>
          </S.HighlightedWarningContainer>

          <S.LabelContainer>
            <Repeat color={theme.colors.gray[500]} />

            <S.Label>
              Último reabastecimento feito {lastUpdated?.supply}
            </S.Label>
          </S.LabelContainer>

          <S.LabelContainer>
            <ToiletPaper color={theme.colors.gray[500]} />

            <S.Label>Última limpeza feita {lastUpdated?.cleaning}</S.Label>
          </S.LabelContainer>

          <S.LabelContainer>
            <Users color={theme.colors.gray[500]} />

            <S.Label>Última manutenção feita por {lastUpdated?.users}</S.Label>
          </S.LabelContainer>

          <S.TitleContainer>
            <S.Title appearance="dark">
              Atualizar o status da manutenção
            </S.Title>

            <S.DoubtButton onPress={handleToggleTooltip}>
              <S.DoubtLabel>?</S.DoubtLabel>

              {isTooltipVisible && (
                <S.TooltipContainer onPress={handleToggleTooltip}>
                  <S.TooltipLabel>
                    O status de manutenção deve ser atualizado apenas quando
                    você tiver reabastecido/limpado o comedouro.
                  </S.TooltipLabel>
                </S.TooltipContainer>
              )}
            </S.DoubtButton>
          </S.TitleContainer>

          <S.Button onPress={() => handleToggleMaintenanceStatus('supply')}>
            <S.LabelContainer>
              <Checkbox
                isSelected={isStatusAdded('supply')}
                color={theme.colors.secondary[600]}
              />

              <S.Title appearance={isStatusAdded('supply') ? 'dark' : 'light'}>
                Reabasteci o comedouro
              </S.Title>
            </S.LabelContainer>
          </S.Button>

          <S.Button onPress={() => handleToggleMaintenanceStatus('cleaning')}>
            <S.LabelContainer>
              <Checkbox
                isSelected={isStatusAdded('cleaning')}
                color={theme.colors.secondary[600]}
              />

              <S.Title
                appearance={isStatusAdded('cleaning') ? 'dark' : 'light'}>
                Limpei o comedouro
              </S.Title>
            </S.LabelContainer>
          </S.Button>

          <Button.Root
            type="filled"
            onPress={handleUpdateFeederMaintenance}
            color={theme.colors.secondary[600]}>
            <Button.Icon>
              <Gear color={theme.colors.utils.white} />
            </Button.Icon>

            <Button.Text color={theme.colors.utils.white}>
              Atualizar
            </Button.Text>
          </Button.Root>
        </S.Header>

        <S.Separator />

        <S.Main>
          <S.Title appearance="dark">Localização</S.Title>

          <S.LabelContainer>
            <CookingPot color={theme.colors.gray[500]} />

            <S.Label>{getFoodsLabel(feeder?.foods)}</S.Label>
          </S.LabelContainer>

          <S.LabelContainer>
            <Signpost color={theme.colors.gray[500]} />

            <S.Label>
              {feeder?.address.street}, {feeder?.address.houseNumber},{' '}
              {feeder?.address.neighborhood}, {feeder?.address.city} (≈
              {estimatedDistanceUntilTheFeeder})
            </S.Label>
          </S.LabelContainer>

          {feeder?.address.complement && feeder.address.reference && (
            <S.LabelContainer>
              <MapPin color={theme.colors.gray[500]} />

              <S.Label>
                {feeder.address.reference} - {feeder.address.complement}
              </S.Label>
            </S.LabelContainer>
          )}

          <Button.Root
            type="filled"
            color={theme.colors.primary[500]}
            onPress={handleOpenDirections}>
            <Button.Icon>
              <Signpost color={theme.colors.utils.white} />
            </Button.Icon>

            <Button.Text color={theme.colors.utils.white}>
              Ver rotas
            </Button.Text>
          </Button.Root>

          <Button.Root
            type="outline"
            color={
              isFavorite(feeder?.id)
                ? theme.colors.secondary[600]
                : theme.colors.gray[700]
            }
            onPress={() => handleToggleFavoriteFeeder(feeder)}>
            <Button.Icon>
              <Heart
                color={
                  isFavorite(feeder?.id)
                    ? theme.colors.secondary[600]
                    : theme.colors.gray[700]
                }
                weight={isFavorite(feeder?.id) ? 'fill' : 'regular'}
              />
            </Button.Icon>

            <Button.Text
              color={
                isFavorite(feeder?.id)
                  ? theme.colors.secondary[600]
                  : theme.colors.gray[700]
              }>
              {isFavorite(feeder?.id) ? 'Favorito' : 'Favoritar'}
            </Button.Text>
          </Button.Root>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}
