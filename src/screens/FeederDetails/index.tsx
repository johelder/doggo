import React, { useCallback, useLayoutEffect } from 'react';

import CheckCircle from 'phosphor-react-native/src/icons/CheckCircle';
import CookingPot from 'phosphor-react-native/src/icons/CookingPot';
import Gear from 'phosphor-react-native/src/icons/Gear';
import Heart from 'phosphor-react-native/src/icons/Heart';
import Info from 'phosphor-react-native/src/icons/Info';
import MapPin from 'phosphor-react-native/src/icons/MapPin';
import Repeat from 'phosphor-react-native/src/icons/Repeat';
import Signpost from 'phosphor-react-native/src/icons/Signpost';
import ToiletPaper from 'phosphor-react-native/src/icons/ToiletPaper';
import Users from 'phosphor-react-native/src/icons/Users';
import { useTheme } from 'styled-components/native';

import { Button, Checkbox, Loader } from '@components';
import { useUserIsFeederFavorite, useUserToggleFavoriteFeeder } from '@domain';
import { TRootStackScreenProps } from '@types';
import { getFoodsLabel, showToast } from '@utils';

import * as S from './styles';
import { useFeederDetails } from './useFeederDetails';

export function FeederDetails({
  navigation,
}: TRootStackScreenProps<'FeederDetails'>) {
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
    isLoading,
  } = useFeederDetails();

  const feederId = feeder?.id!;

  const { isFavorite, isLoading: isLoadingFavorite } = useUserIsFeederFavorite({
    feederId,
    enabled: !!feederId,
  });

  const { toggleFavoriteFeeder } = useUserToggleFavoriteFeeder(feederId!, {
    onError: () => {
      showToast({
        type: 'error',
        message: 'Ocorreu um erro ao favoritar, tente novamente mais tarde.',
      });
    },
  });

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

  if (!feeder) {
    return null;
  }

  if (isLoading) {
    return <Loader.Page />;
  }

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.HighlightedWarningContainer>
            {isNeedMaintenance ? (
              <Info color={theme.colors.red[500]} />
            ) : (
              <CheckCircle color={theme.colors.green[500]} />
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
                color={theme.colors.cyan[600]}
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
                color={theme.colors.cyan[600]}
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
            color={theme.colors.cyan[600]}>
            <Button.Icon>
              <Gear color={theme.colors.gray[0]} />
            </Button.Icon>

            <Button.Text color={theme.colors.gray[0]}>Atualizar</Button.Text>
          </Button.Root>
        </S.Header>

        <S.Separator />

        <S.Main>
          <S.Title appearance="dark">Localização</S.Title>

          <S.LabelContainer>
            <CookingPot color={theme.colors.gray[500]} />

            <S.Label>{getFoodsLabel(feeder.foods)}</S.Label>
          </S.LabelContainer>

          <S.LabelContainer>
            <Signpost color={theme.colors.gray[500]} />

            <S.Label>
              {feeder.address.street}, {feeder.address.houseNumber},{' '}
              {feeder.address.neighborhood}, {feeder.address.city} (≈
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
            color={theme.colors.orange[500]}
            onPress={handleOpenDirections}>
            <Button.Icon>
              <Signpost color={theme.colors.gray[0]} />
            </Button.Icon>

            <Button.Text color={theme.colors.gray[0]}>Ver rotas</Button.Text>
          </Button.Root>

          <Button.Root
            type="outline"
            color={isFavorite ? theme.colors.cyan[600] : theme.colors.gray[700]}
            isLoading={isLoadingFavorite}
            onPress={() => toggleFavoriteFeeder(feeder.id)}>
            <Button.Icon>
              <Heart
                color={
                  isFavorite ? theme.colors.cyan[600] : theme.colors.gray[700]
                }
                weight={isFavorite ? 'fill' : 'regular'}
              />
            </Button.Icon>

            <Button.Text
              color={
                isFavorite ? theme.colors.cyan[600] : theme.colors.gray[700]
              }>
              {isFavorite ? 'Favorito' : 'Favoritar'}
            </Button.Text>
          </Button.Root>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}
