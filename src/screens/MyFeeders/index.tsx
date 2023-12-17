import React, { useLayoutEffect } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { HeaderBackButton } from '@react-navigation/elements';
import ArrowClockwise from 'phosphor-react-native/src/icons/ArrowClockwise';
import CirclesThreePlus from 'phosphor-react-native/src/icons/CirclesThreePlus';
import FolderOpen from 'phosphor-react-native/src/icons/FolderOpen';
import Warning from 'phosphor-react-native/src/icons/Warning';
import { useTheme } from 'styled-components/native';

import { Button, FeederAddress, Loader, PageAlert } from '@components';
import { FeederDomain } from '@data';
import { TRootStackScreenProps } from '@types';
import { handleOpenSupport } from '@utils';

import { FeederDetailsModal } from './components/FeederDetailsModal';
import * as S from './styles';
import { useMyFeeders } from './useMyFeeders';

export function MyFeeders({
  navigation,
}: TRootStackScreenProps<'MyFeeders'>): JSX.Element {
  const {
    feederList,
    isError,
    isFetching,
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

  const renderFeeder = ({ item: feeder }: ListRenderItemInfo<FeederDomain>) => {
    return (
      <FeederAddress
        feeder={feeder}
        onOpenDetails={() => handleOpenDetailsModal(feeder)}
      />
    );
  };

  const renderListEmptyComponent = () => {
    return (
      <PageAlert
        title="Sem comedouros"
        description="Cadastre um novo comedouro para ajudar animais de rua próximos a você."
        icon={<FolderOpen color={theme.colors.gray[700]} size={24} />}
        actionButton={
          <Button.Root
            type="filled"
            color={theme.colors.orange[500]}
            onPress={handleRedirectToSelectLocation}>
            <Button.Icon>
              <CirclesThreePlus size={24} color={theme.colors.gray[0]} />
            </Button.Icon>

            <Button.Text color={theme.colors.gray[0]}>
              Cadastrar novo comedouro
            </Button.Text>
          </Button.Root>
        }
      />
    );
  };

  if (isFetching) {
    return <Loader.Page />;
  }

  if (isError) {
    return (
      <PageAlert
        title="Nós tivemos um pequeno problema"
        description="Ocorreu um erro ao se conectar com o servidor."
        icon={<Warning color={theme.colors.gray[0]} size={24} />}
        color={theme.colors.red[400]}
        actionButton={
          <>
            <Button.Root
              type="filled"
              color={theme.colors.red[500]}
              onPress={handleTryAgain}>
              <Button.Icon>
                <ArrowClockwise color={theme.colors.gray[0]} size={24} />
              </Button.Icon>

              <Button.Text color={theme.colors.gray[0]}>
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
          data={feederList}
          keyExtractor={(feeder: FeederDomain) => feeder.id}
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
