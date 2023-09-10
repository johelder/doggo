import { CommonActions, useNavigation } from '@react-navigation/native';

export function useWelcome() {
  const navigation = useNavigation();

  function handleRedirectToSelectLocation() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'SelectLocation' }],
      }),
    );
  }

  return { handleRedirectToSelectLocation };
}
