import firestore from '@react-native-firebase/firestore';

import { DATABASE_USERS_COLLECTION } from '../constants';
import { UserMapper } from '@src/services/mappers/UserMapper';
import type { IDomainUser } from '@src/types/domain';
import type { IPersistanceUser } from '@src/types/persistance';

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
};
