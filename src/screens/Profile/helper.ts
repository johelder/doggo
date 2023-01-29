import { useNavigation } from '@react-navigation/native';
import { TNavigationProps } from '@src/routes/authenticated/types';

export function ProfileHelper() {
  const navigation = useNavigation<TNavigationProps<'HomeTabs'>>();

  function handleRedirectToConfigurations() {
    navigation.navigate('Configurations');
  }

  return { handleRedirectToConfigurations };
}
