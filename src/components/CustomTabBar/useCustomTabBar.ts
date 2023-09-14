import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';

export function useCustomTabBar(
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>,
) {
  function onPress(isFocused: boolean, target: string, routeName: string) {
    const event = navigation.emit({
      type: 'tabPress',
      target: target,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  }

  return { onPress };
}
