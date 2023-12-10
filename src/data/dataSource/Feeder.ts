import firestore from '@react-native-firebase/firestore';

import { FeederPersistance } from '../models/persistence';

import { FIRESTORE_FEEDERS_COLLECTION } from './constants';

async function create(feeder: Omit<FeederPersistance, 'id'>): Promise<void> {
  await firestore().collection(FIRESTORE_FEEDERS_COLLECTION).add(feeder);
}

export const FeederDataSource = {
  create,
};
