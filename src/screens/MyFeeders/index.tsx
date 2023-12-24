import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import { FeederAddress, Loader } from '@components';
import { FeederDomain } from '@data';

import { EmptyList } from './components/EmptyList';
import { ErrorFallback } from './components/ErrorFallback';
import { FeederDetailsModal } from './components/FeederDetailsModal';
import * as S from './styles';
import { useMyFeeders } from './useMyFeeders';

export function MyFeeders(): JSX.Element {
  const {
    feederList,
    isError,
    isLoading,
    isRefetching,
    handleTryAgain,
    detailsModalRef,
    handleOpenDetailsModal,
    handleCloseDetailsModal,
    currentFeederToEdit,
    removeFeeder,
    handleNavigateToSelectLocation,
  } = useMyFeeders();

  function renderFeeder({ item: feeder }: ListRenderItemInfo<FeederDomain>) {
    return (
      <FeederAddress
        feeder={feeder}
        onOpenDetails={() => handleOpenDetailsModal(feeder)}
      />
    );
  }

  if (isLoading || isRefetching) {
    return <Loader.Page />;
  }

  if (isError) {
    return <ErrorFallback onTryAgain={handleTryAgain} />;
  }

  return (
    <S.Container>
      <S.Content>
        <S.Feeders
          data={feederList}
          keyExtractor={(feeder: FeederDomain) => feeder.id}
          renderItem={renderFeeder}
          ListEmptyComponent={EmptyList}
        />
      </S.Content>

      <FeederDetailsModal
        detailsModalRef={detailsModalRef}
        feeder={currentFeederToEdit}
        onCancel={handleCloseDetailsModal}
        onDelete={removeFeeder}
        onEdit={handleNavigateToSelectLocation}
      />
    </S.Container>
  );
}
