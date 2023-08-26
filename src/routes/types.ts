import { TRootTabParamList } from './authenticated/BottomTabs/types';
import { TRootStackParamList } from './authenticated/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList, TRootTabParamList {}
  }
}
