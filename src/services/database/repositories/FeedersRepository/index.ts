import firestore from '@react-native-firebase/firestore';
import { FeederMapper } from '@src/services/mappers/FeederMapper';

import { DATABASE_FEEDERS_COLLECTION } from './constants';
import type { IDomainFeeder } from '@src/types/domain/feeder';
import type { IPersistanceFeeder } from '@src/types/persistance';

export const FeedersRepository = {
  async create(feeder: IDomainFeeder) {
    firestore()
      .collection(DATABASE_FEEDERS_COLLECTION)
      .add(FeederMapper.toPersistance(feeder));
  },

  async findAll() {
    const snapshot = await firestore()
      .collection(DATABASE_FEEDERS_COLLECTION)
      .get();

    return snapshot.docs.map(documentSnapshot =>
      FeederMapper.toDomain({
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      } as IPersistanceFeeder),
    );
  },

  async delete(feederId: string) {
    firestore().collection(DATABASE_FEEDERS_COLLECTION).doc(feederId).delete();
  },
};
