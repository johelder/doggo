import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { PageAlert, Button, Icon } from '@components';

export function EmptyList(): React.JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <PageAlert
      title="Sem comedouros favoritos"
      description="Seus comedouros favoritados serão encontrados aqui."
      icon={<Icon name="heartBreak" color={theme.colors.gray[700]} />}
      actionButton={
        <Button.Root
          type="filled"
          color={theme.colors.orange[500]}
          onPress={() => navigation.navigate('Map')}>
          <Button.Icon>
            <Icon name="mapTrifold" color={theme.colors.gray[0]} />
          </Button.Icon>

          <Button.Text color={theme.colors.gray[0]}>Ir para o mapa</Button.Text>
        </Button.Root>
      }
    />
  );
}
