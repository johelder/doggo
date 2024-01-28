import database from '@react-native-firebase/firestore';

import { UserPersistance } from '../models/persistence';

import { FIRESTORE_USERS_COLLECTION } from './constants';

async function create(user: UserPersistance): Promise<void> {
  await database()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(user.id)
    .set(user);
}

async function findById(id: string): Promise<UserPersistance | null> {
  const user = await database()
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
  const response = await database()
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
  database()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(userId)
    .update({
      favorites: database.FieldValue.arrayUnion(feederId),
    });
}

async function removeFavoriteFeeder(
  userId: string,
  feederId: string,
): Promise<void> {
  database()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(userId)
    .update({
      favorites: database.FieldValue.arrayRemove(feederId),
    });
}

async function remove(id: string): Promise<void> {
  await database()
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
