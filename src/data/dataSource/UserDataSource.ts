import firestore from '@react-native-firebase/firestore';

import { UserPersistance } from '../models/persistence';

import { FIRESTORE_USERS_COLLECTION } from './constants';

async function create(user: UserPersistance): Promise<void> {
  await firestore()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(user.id)
    .set(user);
}

async function findById(id: string): Promise<UserPersistance | null> {
  const user = await firestore()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(id)
    .get();

  const data = user.data();

  if (!data) {
    return null;
  }

  return { ...data, id: user.id };
}

async function findFavoriteFeederById(
  userId: string,
  feederId: string,
): Promise<string> {
  const response = await firestore()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(userId)
    .get();

  const favoritesList = response.data()?.favorites;

  return favoritesList?.find(id => id === feederId) ?? '';
}

async function addFavoriteFeeder(
  userId: string,
  feederId: string,
): Promise<void> {
  firestore()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(userId)
    .update({
      favorites: firestore.FieldValue.arrayUnion(feederId),
    });
}

async function removeFavoriteFeeder(
  userId: string,
  feederId: string,
): Promise<void> {
  firestore()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(userId)
    .update({
      favorites: firestore.FieldValue.arrayRemove(feederId),
    });
}

async function remove(id: string): Promise<void> {
  await firestore()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(id)
    .delete();
}

export const UserDataSource = {
  create,
  findById,
  findFavoriteFeederById,
  addFavoriteFeeder,
  removeFavoriteFeeder,
  remove,
};
