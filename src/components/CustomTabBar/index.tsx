import React from 'react';

import { TabBarIcon } from './TabBarIcon';

import type { ICustomTabBarProps } from './types';

import * as S from './styles';
import { useCustomTabBar } from './useCustomTabBar';

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: ICustomTabBarProps) {
  const { onPress } = useCustomTabBar(navigation);

  return (
    <S.Container>
      <S.Content>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          if (!options.tabBarIcon || !options.tabBarLabel) {
            return null;
          }

          return (
            <S.ButtonTabContainer
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={() => onPress(isFocused, route.key, route.name)}>
              <S.ButtonTabContent isFocused={isFocused}>
                <S.ButtonTabIconContainer>
                  {route.name === 'Map' && (
                    <TabBarIcon isFocused={isFocused} screen="map" />
                  )}

                  {route.name === 'Profile' && (
                    <TabBarIcon isFocused={isFocused} screen="profile" />
                  )}
                </S.ButtonTabIconContainer>

                <S.ButtonTabBarLabel isFocused={isFocused}>
                  {String(options.tabBarLabel)}
                </S.ButtonTabBarLabel>
              </S.ButtonTabContent>
            </S.ButtonTabContainer>
          );
        })}
      </S.Content>
    </S.Container>
  );
}
