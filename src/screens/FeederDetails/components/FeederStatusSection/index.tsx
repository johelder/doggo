import React from 'react';

import { FeederStatus, InformationLabel } from '@components';
import { useMaintenance } from '@domain';

import { FeederMaintenanceForm } from '..';

import * as Styled from './styles';
import { FeederStatusSectionProps } from './types';

export function FeederStatusSection({
  feederId,
  maintenanceStatus,
}: FeederStatusSectionProps): React.JSX.Element {
  const { getLastUpdateInformation, isNeedMaintenance } =
    useMaintenance(maintenanceStatus);

  return (
    <Styled.Header>
      <FeederStatus isNeedMaintenance={isNeedMaintenance()} />

      <InformationLabel
        label={`Último reabastecimento feito ${
          getLastUpdateInformation().supply
        }`}
        iconName="clockCounterClockwise"
      />

      <InformationLabel
        label={`Última limpeza feita ${getLastUpdateInformation().cleaning}`}
        iconName="toiletPaper"
      />

      <InformationLabel
        label={`Última manutenção feita por ${
          getLastUpdateInformation().users
        }`}
        iconName="users"
      />

      <FeederMaintenanceForm feederId={feederId} />
    </Styled.Header>
  );
}
