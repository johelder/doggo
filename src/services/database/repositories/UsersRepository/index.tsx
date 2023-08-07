import firestore from '@react-native-firebase/firestore';

import {
  DATABASE_FEEDERS_COLLECTION,
  DATABASE_USERS_COLLECTION,
} from '../constants';
import { UserMapper } from '@src/services/mappers/UserMapper';
import { FeederMapper } from '@src/services/mappers/FeederMapper';

import type { IDomainUser } from '@src/types/domain';
import type {
  IPersistanceFeeder,
  IPersistanceUser,
} from '@src/types/persistance';

export const UsersRepository = {
  async create(user: IDomainUser) {
    firestore()
      .collection(DATABASE_USERS_COLLECTION)
      .doc(user.id)
      .set(UserMapper.toPersistance(user));
  },

  async findById(id: string) {
    const user = await firestore()
      .collection<IPersistanceUser>(DATABASE_USERS_COLLECTION)
      .doc(id)
      .get();

    const data = user.data();

    if (!data) {
      return null;
    }

    return UserMapper.toDomain({ ...data, id: user.id });
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
      .collection<IPersistanceUser>(DATABASE_USERS_COLLECTION)
      .doc(id)
      .get();

    const userFavorites = user.data()?.favorites;

    if (!userFavorites?.length) {
      return [];
    }

    const snapshot = await firestore()
      .collection<IPersistanceFeeder>(DATABASE_FEEDERS_COLLECTION)
      .where(firestore.FieldPath.documentId(), 'in', userFavorites)
      .get();

    return snapshot.docs.map(documentSnapshot =>
      FeederMapper.toDomain({
        ...documentSnapshot.data(),
        id: documentSnapshot.id,
      }),
    );
  },
};
