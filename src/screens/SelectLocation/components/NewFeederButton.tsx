import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import { Icon } from '@components';
import { theme } from '@theme';

export function NewFeederButton(props: BottomTabBarButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props} style={styles.button}>
        <Icon name="plusFeeder" size={42} color={theme.colors.gray[0]} />
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
