import React from 'react';
import { View } from 'react-native';

import Bone from '@assets/icons/bone.svg';

export function CustomMarker() {
  return (
    <View>
      <Bone width={50} height={50} color="red" />
    </View>
  );
}
