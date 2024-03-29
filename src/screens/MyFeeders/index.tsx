import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import Animated, { FadeInUp } from 'react-native-reanimated';

import { FeederAddress, Loader } from '@components';
import { FeederDomain } from '@data';

import { EmptyList } from './components/EmptyList';
import { ErrorFallback } from './components/ErrorFallback';
import { FeederDetailsModal } from './components/FeederDetailsModal';
import * as Styled from './styles';
import { useMyFeeders } from './useMyFeeders';

export function MyFeeders(): React.JSX.Element {
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
      <Animated.View entering={FadeInUp}>
        <FeederAddress
          feeder={feeder}
          onOpenDetails={() => handleOpenDetailsModal(feeder)}
        />
      </Animated.View>
    );
  }

  if (isLoading || isRefetching) {
    return <Loader.Page />;
  }

  if (isError) {
    return <ErrorFallback onTryAgain={handleTryAgain} />;
  }

  return (
    <Styled.Container testID="my-feeders-screen">
      <Styled.Content>
        <Styled.Feeders
          data={feederList}
          keyExtractor={(feeder: FeederDomain) => feeder.id}
          renderItem={renderFeeder}
          ListEmptyComponent={EmptyList}
        />
      </Styled.Content>

      <FeederDetailsModal
        detailsModalRef={detailsModalRef}
        feeder={currentFeederToEdit}
        onCancel={handleCloseDetailsModal}
        onDelete={removeFeeder}
        onEdit={handleNavigateToSelectLocation}
      />
    </Styled.Container>
  );
}
