import React from 'react';

import { Loader } from '@components';
import { useFeederFindOne } from '@domain';
import { TRootStackScreenProps } from '@types';

import { FeederLocationSection, FeederStatusSection } from './components';
import * as S from './styles';

export function FeederDetails({
  route,
}: TRootStackScreenProps<'FeederDetails'>) {
  const { feeder, isLoading } = useFeederFindOne({
    id: route.params.feederId,
  });

  if (isLoading) {
    return <Loader.Page />;
  }

  if (!feeder) {
    return null;
  }

  return (
    <S.Container>
      <S.Content>
        <FeederStatusSection
          feederId={feeder.id}
          maintenanceStatus={feeder.maintenanceStatus}
        />

        <S.Separator />

        <FeederLocationSection feeder={feeder} />
      </S.Content>
    </S.Container>
  );
}
