import React, { useCallback, useLayoutEffect } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';

import { useTheme } from 'styled-components';

import CirclesThreePlus from 'phosphor-react-native/src/icons/CirclesThreePlus';
import FolderOpen from 'phosphor-react-native/src/icons/FolderOpen';
import Warning from 'phosphor-react-native/src/icons/Warning';
import ArrowClockwise from 'phosphor-react-native/src/icons/ArrowClockwise';

import { handleOpenSupport } from '@src/utils';
import { Button, FeederAddress, Loader, PageAlert } from '@src/components';
import { FeederDetailsModal } from './components/FeederDetailsModal';
import { useMyFeeders } from './useMyFeeders';

import type { IFeeder } from '@src/types';
import type { TRootStackScreenProps } from '@src/routes/authenticated/types';

import * as S from './styles';

export function MyFeeders({
  navigation,
}: TRootStackScreenProps<'MyFeeders'>): JSX.Element {
  const {
    feeders,
    pageStatus,
    handleTryAgain,
    detailsModalRef,
    handleRedirectToSelectLocation,
    handleOpenDetailsModal,
    handleCloseDetailsModal,
    currentFeederToEdit,
    isLoadingDelete,
    handleDeleteFeeder,
    handleNavigateToSelectLocation,
  } = useMyFeeders();
  const theme = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: props => (
        <HeaderBackButton
          {...props}
          onPress={() => navigation.navigate('HomeTabs', { screen: 'Profile' })}
        />
      ),
    });
  }, [navigation]);

  const renderFeeder = useCallback(
    ({ item: feeder }: ListRenderItemInfo<IFeeder>) => {
      return (
        <FeederAddress
          feeder={feeder}
          onOpenDetails={() => handleOpenDetailsModal(feeder)}
        />
      );
    },
    [handleOpenDetailsModal],
  );

  const renderListEmptyComponent = useCallback(() => {
    return (
      <PageAlert
        title="Sem comedouros"
        description="Cadastre um novo comedouro para ajudar animais de rua próximos a você."
        icon={<FolderOpen color={theme.colors.gray[700]} size={24} />}
        actionButton={
          <Button.Root
            type="filled"
            color={theme.colors.primary[500]}
            onPress={handleRedirectToSelectLocation}>
            <Button.Icon>
              <CirclesThreePlus size={24} color={theme.colors.utils.white} />
            </Button.Icon>

            <Button.Text color={theme.colors.utils.white}>
              Cadastrar novo comedouro
            </Button.Text>
          </Button.Root>
        }
      />
    );
  }, [
    handleRedirectToSelectLocation,
    theme.colors.gray,
    theme.colors.primary,
    theme.colors.utils.white,
  ]);

  if (pageStatus === 'loading') {
    return <Loader.Page />;
  }

  if (pageStatus === 'error') {
    return (
      <PageAlert
        title="Nós tivemos um pequeno problema"
        description="Ocorreu um erro ao se conectar com o servidor."
        icon={<Warning color={theme.colors.utils.white} size={24} />}
        color={theme.colors.attention[400]}
        actionButton={
          <>
            <Button.Root
              type="filled"
              color={theme.colors.attention[500]}
              onPress={handleTryAgain}>
              <Button.Icon>
                <ArrowClockwise color={theme.colors.utils.white} size={24} />
              </Button.Icon>

              <Button.Text color={theme.colors.utils.white}>
                Tentar novamente
              </Button.Text>
            </Button.Root>

            <S.Label>
              Se o problema persistir, por favor,{' '}
              <S.Highlighted onPress={handleOpenSupport}>
                contate-nos
              </S.Highlighted>
              .
            </S.Label>
          </>
        }
      />
    );
  }

  return (
    <S.Container>
      <S.Content>
        <S.Feeders
          data={feeders}
          keyExtractor={feeder => String(feeder.id)}
          renderItem={renderFeeder}
          ListEmptyComponent={renderListEmptyComponent}
        />
      </S.Content>

      <FeederDetailsModal
        detailsModalRef={detailsModalRef}
        feeder={currentFeederToEdit}
        onCancel={handleCloseDetailsModal}
        onDelete={handleDeleteFeeder}
        onEdit={handleNavigateToSelectLocation}
        isLoadingDelete={isLoadingDelete}
      />
    </S.Container>
  );
}
