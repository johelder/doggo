import React from 'react';

import { Map } from '@src/components';
import { SafeAreaView } from 'react-native';

export function Home(): JSX.Element {
  return (
    <SafeAreaView>
      <Map showsUserLocation />
    </SafeAreaView>
  );
}
