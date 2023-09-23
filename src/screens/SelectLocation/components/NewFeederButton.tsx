import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { PlusIcon } from '@app/src/assets/icons/PlusIcon';
import { theme } from '@theme';

import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

export function NewFeederButton(props: BottomTabBarButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props} style={styles.button}>
        <PlusIcon size={42} color={theme.colors.gray[0]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    top: -theme.spacings.xmd,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: theme.colors.orange[500],
  },
});
