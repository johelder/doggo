import firestore from '@react-native-firebase/firestore';

import { DATABASE_USERS_COLLECTION } from '../constants';
import { UserMapper } from '@src/services/mappers/UserMapper';
import type { IDomainFeeder, IDomainUser } from '@src/types/domain';
import type { IPersistanceUser } from '@src/types/persistance';
import { FeederMapper } from '@src/services/mappers/FeederMapper';

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

  async addNewFavoriteFeeder(userId: string, feeder: IDomainFeeder) {
    firestore()
      .collection(DATABASE_USERS_COLLECTION)
      .doc(userId)
      .update({
        favorites: firestore.FieldValue.arrayUnion(
          FeederMapper.toPersistance(feeder),
        ),
      });
  },

  async removeFavoriteFeeder(userId: string, feeder: IDomainFeeder) {
    firestore()
      .collection(DATABASE_USERS_COLLECTION)
      .doc(userId)
      .update({
        favorites: firestore.FieldValue.arrayRemove(
          FeederMapper.toPersistance(feeder),
        ),
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

    const userData = user.data();

    if (!userData) {
      return [];
    }

    return UserMapper.toDomain(userData).favorites;
  },
};
