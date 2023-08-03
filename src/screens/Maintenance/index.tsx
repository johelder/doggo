import React from 'react';
import { useTheme } from 'styled-components';

import Info from 'phosphor-react-native/src/icons/Info';
import Repeat from 'phosphor-react-native/src/icons/Repeat';
import ToiletPaper from 'phosphor-react-native/src/icons/ToiletPaper';
import ArrowUp from 'phosphor-react-native/src/icons/ArrowUp';

import { Button, Checkbox } from '@src/components';
import { useMaintenance } from './useMaintenance';

import * as S from './styles';

export function Maintenance() {
  const {
    handleToggleMaintenanceStatus,
    isStatusAdded,
    handleUpdateFeederMaintenance,
  } = useMaintenance();

  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Info color={theme.colors.utils.white} />

          <S.WarningLabel>
            O status de manutenção é atualizado por quem acabou de reabastecer
            ou limpar o comedouro, se você realizou algumas dessas atividades
            neste comedouro, por favor, preencha abaixo a(s) atividade(s)
            realizada(s), dessa forma, outras pessoas poderão visualizar a
            situação atual do comedouro.
          </S.WarningLabel>
        </S.Header>

        <S.Main>
          <S.ButtonsContainer>
            <S.Button onPress={() => handleToggleMaintenanceStatus('supply')}>
              <S.LabelContainer>
                <Repeat
                  color={
                    isStatusAdded('supply')
                      ? theme.colors.gray[700]
                      : theme.colors.gray[500]
                  }
                />
                <S.Label isSelected={isStatusAdded('supply')}>
                  Reabasteci o comedouro
                </S.Label>
              </S.LabelContainer>

              <Checkbox isSelected={isStatusAdded('supply')} />
            </S.Button>

            <S.Button onPress={() => handleToggleMaintenanceStatus('cleaning')}>
              <S.LabelContainer>
                <ToiletPaper
                  color={
                    isStatusAdded('cleaning')
                      ? theme.colors.gray[700]
                      : theme.colors.gray[500]
                  }
                />
                <S.Label isSelected={isStatusAdded('cleaning')}>
                  Limpei o comedouro
                </S.Label>
              </S.LabelContainer>

              <Checkbox isSelected={isStatusAdded('cleaning')} />
            </S.Button>
          </S.ButtonsContainer>

          <Button.Root type="filled" onPress={handleUpdateFeederMaintenance}>
            <Button.Icon>
              <ArrowUp color={theme.colors.utils.white} />
            </Button.Icon>

            <Button.Text color={theme.colors.utils.white}>
              Atualizar
            </Button.Text>
          </Button.Root>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}
