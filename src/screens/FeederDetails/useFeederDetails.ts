import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { Linking, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useAuth, useMap } from '@src/hooks';
import {
  calculateDistanceBetweenTwoPoints,
  errorHandler,
  formatRelativeDate,
  getDaysDifference,
  showToast,
} from '@src/utils';
import { LAST_FIFTEEN_DAYS, YESTERDAY } from './constants';

import type {
  TNavigationProps,
  TRouteProps,
} from '@src/routes/authenticated/types';
import { FeedersRepository } from '@src/services/database/repositories/FeedersRepository';

import type { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import type { TMaintenanceStatus } from '@src/types';
import type { IInitialState, TActions, TMaintenanceProps } from './types';

const initialState: IInitialState = {
  maintenanceStatus: [],
  feeder: null,
  isNeedMaintenance: false,
  lastUpdated: null,
  pageStatus: 'loading',
  isTooltipVisible: false,
};

function reducer(state: IInitialState, action: TActions): IInitialState {
  switch (action.type) {
    case 'update_feeder_state': {
      return {
        ...state,
        feeder: action.payload.feeder,
        pageStatus: 'success',
      };
    }
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

  const route = useRoute<TRouteProps<'FeederDetails'>>();
  const navigation = useNavigation<TNavigationProps<'FeederDetails'>>();

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
    try {
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

      await FeedersRepository.updateMaintenance(
        state.maintenanceStatus,
        route.params.feederId,
        user,
      );

      showToast({
        type: 'success',
        message: 'Manutenção atualizada com sucesso.',
        duration: 4000,
      });

      navigation.goBack();
    } catch (error) {
      showToast({
        type: 'error',
        message:
          'Ocorreu um erro ao atualizar, por favor, tente novamente mais tarde.',
        duration: 4000,
      });

      errorHandler.reportError(error, handleUpdateFeederMaintenance.name);
    }
  }

  function handleOpenDirections() {
    if (!state.feeder?.coordinates) {
      return;
    }

    const { latitude, longitude } = state.feeder.coordinates;

    const iosURL = `googleMaps://app?saddr=${latitude}&daddr=${longitude}`;
    const androidURL = `google.navigation:q=${latitude}+${longitude}`;

    Linking.openURL(Platform.OS === 'ios' ? iosURL : androidURL);
  }

  function getUpdaterUser(firstUser?: string, secondUser?: string) {
    if (firstUser === secondUser) {
      return firstUser;
    }

    if (firstUser && secondUser) {
      return `${firstUser} e ${secondUser}`;
    }

    return firstUser ?? secondUser;
  }

  const estimatedDistanceUntilTheFeeder = useMemo(() => {
    if (!currentUserLocation?.coords || !state.feeder?.coordinates) {
      return 0;
    }

    return calculateDistanceBetweenTwoPoints(
      currentUserLocation.coords,
      state.feeder.coordinates,
    );
  }, [currentUserLocation?.coords, state.feeder?.coordinates]);

  const verifyFeederMaintenance = useCallback(
    (supply?: TMaintenanceProps, cleaning?: TMaintenanceProps) => {
      const convertedLastSupplyDate =
        supply?.updatedAt as FirebaseFirestoreTypes.Timestamp;
      const convertedLastCleaningDate =
        cleaning?.updatedAt as FirebaseFirestoreTypes.Timestamp;
      const supplyNameUpdater = supply?.updatedBy.userName;
      const cleaningNameUpdater = cleaning?.updatedBy.userName;

      const supplyUpdate = getDaysDifference(convertedLastSupplyDate.toDate());
      const cleaningDate = getDaysDifference(
        convertedLastCleaningDate.toDate(),
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

  const fetchFeeder = useCallback(async () => {
    try {
      if (!user?.id) {
        return;
      }

      const response = await FeedersRepository.findById(route.params.feederId);

      verifyFeederMaintenance(
        response?.maintenanceStatus.supply,
        response?.maintenanceStatus.cleaning,
      );

      dispatch({
        type: 'update_feeder_state',
        payload: {
          feeder: response,
        },
      });
    } catch (error) {
      errorHandler.reportError(error, fetchFeeder.name);
      dispatch({ type: 'update_page_status', payload: 'error' });
    }
  }, [route.params.feederId, user?.id, verifyFeederMaintenance]);

  useEffect(() => {
    fetchFeeder();
  }, [fetchFeeder]);

  return {
    feeder: state.feeder,
    handleToggleMaintenanceStatus,
    isStatusAdded,
    handleUpdateFeederMaintenance,
    pageStatus: state.pageStatus,
    formattedUserName: state.feeder?.user.name.split(' ')[0].toUpperCase(),
    isNeedMaintenance: state.isNeedMaintenance,
    lastUpdated: state.lastUpdated,
    isTooltipVisible: state.isTooltipVisible,
    handleToggleTooltip,
    estimatedDistanceUntilTheFeeder,
    handleOpenDirections,
  };
}
