import firestore from '@react-native-firebase/firestore';

import {
  DATABASE_FEEDERS_COLLECTION,
  DATABASE_USERS_COLLECTION,
} from '../constants';

import type { IFeeder, IUser } from '@types';

export const UsersRepository = {
  async create(user: IUser) {
    firestore().collection(DATABASE_USERS_COLLECTION).doc(user.id).set(user);
  },

  async findById(id: string) {
    const user = await firestore()
      .collection<IUser>(DATABASE_USERS_COLLECTION)
      .doc(id)
      .get();

    const data = user.data();

    if (!data) {
      return null;
    }

    return { ...data, id: user.id };
  },

  async addNewFavoriteFeeder(userId: string, feederId: string) {
    firestore()
      .collection(DATABASE_USERS_COLLECTION)
      .doc(userId)
      .update({
        favorites: firestore.FieldValue.arrayUnion(feederId),
      });
  },

  async removeFavoriteFeeder(userId: string, feederId: string) {
    firestore()
      .collection(DATABASE_USERS_COLLECTION)
      .doc(userId)
      .update({
        favorites: firestore.FieldValue.arrayRemove(feederId),
      });
  },

  async findFavoriteFeederById(userId: string, feederId: string) {
    const favorites = await this.findAllFavoritesFeederByUserId(userId);

    return favorites?.find(feeder => feeder.id === feederId);
  },

  async findAllFavoritesFeederByUserId(id: string) {
    const user = await firestore()
      .collection<IUser>(DATABASE_USERS_COLLECTION)
      .doc(id)
      .get();

    const userFavorites = user.data()?.favorites;

    if (!userFavorites?.length) {
      return [];
    }

    const snapshot = await firestore()
      .collection<IFeeder>(DATABASE_FEEDERS_COLLECTION)
      .where(firestore.FieldPath.documentId(), 'in', userFavorites)
      .get();

    return snapshot.docs.map(documentSnapshot => ({
      ...documentSnapshot.data(),
      id: documentSnapshot.id,
    }));
  },

  async delete(id: string) {
    firestore().collection(DATABASE_USERS_COLLECTION).doc(id).delete();
  },
};
