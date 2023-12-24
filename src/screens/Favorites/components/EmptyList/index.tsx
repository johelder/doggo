import React from 'react';

import { useNavigation } from '@react-navigation/native';
import HeartBreak from 'phosphor-react-native/src/icons/HeartBreak';
import MapTrifold from 'phosphor-react-native/src/icons/MapTrifold';
import { useTheme } from 'styled-components/native';

import { PageAlert, Button } from '@components';

export function EmptyList(): React.JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <PageAlert
      title="Sem comedouros favoritos"
      description="Seus comedouros favoritados serão encontrados aqui."
      icon={<HeartBreak color={theme.colors.gray[700]} size={24} />}
      actionButton={
        <Button.Root
          type="filled"
          color={theme.colors.orange[500]}
          onPress={() => navigation.navigate('Map')}>
          <Button.Icon>
            <MapTrifold size={24} color={theme.colors.gray[0]} />
          </Button.Icon>

          <Button.Text color={theme.colors.gray[0]}>Ir para o mapa</Button.Text>
        </Button.Root>
      }
    />
  );
}
