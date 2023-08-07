import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { TDefaultScreensProps } from '@src/routes/authenticated/types';
import { TMaintenanceStatus, TPageStatus } from '@src/types/common';
import { IDomainFeeder } from '@src/types/domain';

export interface IFeederDetailsProps
  extends TDefaultScreensProps<'FeederDetails'> {}

export type TMaintenanceProps = {
  updatedAt: FirebaseFirestoreTypes.FieldValue;
  updatedBy: {
    userId: string;
    userName: string;
  };
};

export type TUpdateProps = {
  supply: string;
  cleaning: string;
  users: string | undefined;
};

export interface IInitialState {
  maintenanceStatus: TMaintenanceStatus[];
  feeder: IDomainFeeder | null;
  isNeedMaintenance: boolean;
  lastUpdated: TUpdateProps | null;
  pageStatus: TPageStatus;
  isTooltipVisible: boolean;
}

export type TActions =
  | TUpdateInitialState
  | TUpdatePageStatus
  | TUpdateNeedMaintenance
  | TUpdateMaintenanceStatus
  | TUpdateTooltipVisibility
  | TUpdateFavoriteState
  | TUpdateFavoriteLoading;

type TUpdateInitialState = {
  type: 'update_feeder_state';
  payload: {
    feeder: IDomainFeeder | null;
  };
};

type TUpdatePageStatus = {
  type: 'update_page_status';
  payload: TPageStatus;
};

type TUpdateNeedMaintenance = {
  type: 'update_maintenance_data';
  payload: {
    needMaintenance: boolean;
    lastUpdated: TUpdateProps;
  };
};

type TUpdateMaintenanceStatus = {
  type: 'update_maintenance_input_state';
  payload: TMaintenanceStatus;
};

type TUpdateTooltipVisibility = {
  type: 'update_tooltip_visibility';
};

type TUpdateFavoriteState = {
  type: 'update_favorite_state';
  payload: boolean;
};

type TUpdateFavoriteLoading = {
  type: 'update_favorite_loading';
  payload: boolean;
};