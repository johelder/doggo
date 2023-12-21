import firestore from '@react-native-firebase/firestore';

import { UserPersistance } from '../models/persistence';

import { FIRESTORE_USERS_COLLECTION } from './constants';

async function create(user: UserPersistance): Promise<void> {
  await firestore()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(user.id)
    .set(user);
}

export const UserDataSource = {
  create,
};
