import React from 'react';

import { Loader } from '@components';
import { useFeederFindOne } from '@domain';
import { TRootStackScreenProps } from '@types';

import { FeederLocationSection, FeederStatusSection } from './components';
import * as Styled from './styles';

export function FeederDetails({
  route,
}: TRootStackScreenProps<'FeederDetails'>): React.JSX.Element | null {
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
    <Styled.Container>
      <Styled.Content>
        <FeederStatusSection
          feederId={feeder.id}
          maintenanceStatus={feeder.maintenanceStatus}
        />

        <Styled.Separator />

        <FeederLocationSection feeder={feeder} />
      </Styled.Content>
    </Styled.Container>
  );
}
