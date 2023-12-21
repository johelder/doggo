import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { Linking, Platform } from 'react-native';

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';

import { MaintenanceDomain } from '@data';
import { useFeederFindOne, useFeederUpdateMaintenance } from '@domain';
import { useAuth, useMap } from '@hooks';
import { TMaintenanceStatus, TRootStackScreenProps } from '@types';
import {
  formatRelativeDate,
  getDaysDifference,
  getFormattedDistanceBetweenTwoPoints,
  showToast,
} from '@utils';

import { LAST_FIFTEEN_DAYS, YESTERDAY } from './constants';
import { IInitialState, TActions } from './types';

const initialState: IInitialState = {
  maintenanceStatus: [],
  feeder: null,
  isNeedMaintenance: false,
  lastUpdated: null,
  pageStatus: 'idle',
  isTooltipVisible: false,
};

function reducer(state: IInitialState, action: TActions): IInitialState {
  switch (action.type) {
    case 'update_page_status': {
      return {
        ...state,
        pageStatus: action.payload,
      };
    }
    case 'update_maintenance_data': {
      return {
        ...state,
        isNeedMaintenance: action.payload.needMaintenance,
        lastUpdated: action.payload.lastUpdated,
      };
    }
    case 'update_maintenance_input_state': {
      return {
        ...state,
        maintenanceStatus: state.maintenanceStatus.includes(action.payload)
          ? state.maintenanceStatus.filter(
              storedStatus => storedStatus !== action.payload,
            )
          : [...state.maintenanceStatus, action.payload],
      };
    }
    case 'update_tooltip_visibility': {
      return {
        ...state,
        isTooltipVisible: !state.isTooltipVisible,
      };
    }

    default:
      return initialState;
  }
}

export function useFeederDetails() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { user } = useAuth();
  const { currentUserLocation } = useMap();

  const route = useRoute<TRootStackScreenProps<'FeederDetails'>['route']>();
  const navigation = useNavigation();

  const { updateMaintenance } = useFeederUpdateMaintenance({
    onSuccess: () => {
      showToast({
        type: 'success',
        message: 'Manutenção atualizada com sucesso.',
      });

      navigation.goBack();
    },
    onError: () => {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao atualizar, por favor, tente novamente mais tarde.',
        duration: 4000,
      });
    },
  });

  const { feeder, isSuccess, isLoading, isError } = useFeederFindOne({
    id: route.params.feederId,
  });

  function handleToggleMaintenanceStatus(status: TMaintenanceStatus) {
    dispatch({ type: 'update_maintenance_input_state', payload: status });
  }

  function handleToggleTooltip() {
    dispatch({ type: 'update_tooltip_visibility' });
  }

  function isStatusAdded(status: TMaintenanceStatus) {
    return state.maintenanceStatus.includes(status);
  }

  async function handleUpdateFeederMaintenance() {
    if (!user) {
      return;
    }

    if (state.maintenanceStatus.length === 0) {
      showToast({
        type: 'warning',
        message: 'Preencha pelo menos um campo parar continuar.',
        duration: 4000,
      });

      return;
    }

    updateMaintenance({
      status: state.maintenanceStatus,
      feederId: route.params.feederId,
      user,
    });
  }

  function handleOpenDirections() {
    if (!feeder?.coordinates) {
      return;
    }

    const { latitude, longitude } = feeder.coordinates;

    const iosURL = `googleMaps://app?saddr=${latitude}&daddr=${longitude}`;
    const androidURL = `google.navigation:q=${latitude}+${longitude}`;

    Linking.openURL(Platform.OS === 'ios' ? iosURL : androidURL);
  }

  function getUpdaterUser(
    firstUser?: string | null,
    secondUser?: string | null,
  ) {
    if (firstUser === secondUser) {
      return firstUser;
    }

    if (firstUser && secondUser) {
      return `${firstUser} e ${secondUser}`;
    }

    return firstUser ?? secondUser;
  }

  const estimatedDistanceUntilTheFeeder = useMemo(() => {
    if (!currentUserLocation?.coords || !feeder?.coordinates) {
      return 0;
    }

    return getFormattedDistanceBetweenTwoPoints(
      currentUserLocation.coords,
      feeder.coordinates,
    );
  }, [currentUserLocation?.coords, feeder?.coordinates]);

  const verifyFeederMaintenance = useCallback(
    (supply?: MaintenanceDomain, cleaning?: MaintenanceDomain) => {
      const convertedLastSupplyDate =
        supply?.updatedAt as FirebaseFirestoreTypes.Timestamp;
      const convertedLastCleaningDate =
        cleaning?.updatedAt as FirebaseFirestoreTypes.Timestamp;
      const supplyNameUpdater = supply?.updatedBy.userName;
      const cleaningNameUpdater = cleaning?.updatedBy.userName;

      const supplyUpdate = getDaysDifference(convertedLastSupplyDate?.toDate());
      const cleaningDate = getDaysDifference(
        convertedLastCleaningDate?.toDate(),
      );

      dispatch({
        type: 'update_maintenance_data',
        payload: {
          needMaintenance:
            supplyUpdate < YESTERDAY || cleaningDate < LAST_FIFTEEN_DAYS,
          lastUpdated: {
            supply: formatRelativeDate(convertedLastSupplyDate.toDate()),
            cleaning: formatRelativeDate(convertedLastCleaningDate.toDate()),
            users: getUpdaterUser(supplyNameUpdater, cleaningNameUpdater),
          },
        },
      });
    },
    [],
  );

  useEffect(() => {
    if (isSuccess) {
      verifyFeederMaintenance(
        feeder?.maintenanceStatus.supply,
        feeder?.maintenanceStatus.cleaning,
      );
    }
  }, [
    feeder?.maintenanceStatus.cleaning,
    feeder?.maintenanceStatus.supply,
    isSuccess,
    verifyFeederMaintenance,
  ]);

  return {
    feeder: feeder,
    handleToggleMaintenanceStatus,
    isStatusAdded,
    handleUpdateFeederMaintenance,
    pageStatus: state.pageStatus,
    isLoading,
    isError,
    formattedUserName: feeder?.user.name?.split(' ')[0].toUpperCase(),
    isNeedMaintenance: state.isNeedMaintenance,
    lastUpdated: state.lastUpdated,
    isTooltipVisible: state.isTooltipVisible,
    handleToggleTooltip,
    estimatedDistanceUntilTheFeeder,
    handleOpenDirections,
  };
}
