import firestore from '@react-native-firebase/firestore';
import { FeederMapper } from '@src/services/mappers/FeederMapper';

import { DATABASE_FEEDERS_COLLECTION } from '../constants';
import type { IDomainFeeder } from '@src/types/domain/feeder';
import type { IPersistanceFeeder } from '@src/types/persistance';

export const FeedersRepository = {
  async create(feeder: IDomainFeeder) {
    firestore()
      .collection(DATABASE_FEEDERS_COLLECTION)
      .add(FeederMapper.toPersistance(feeder));
  },

  async findById(id: string) {
    const feeder = await firestore()
      .collection<IPersistanceFeeder>(DATABASE_FEEDERS_COLLECTION)
      .doc(id)
      .get();

    const data = feeder.data();

    if (!data) {
      return null;
    }

    return FeederMapper.toDomain({ ...data, id: feeder.id });
  },

  async findAll() {
    const snapshot = await firestore()
      .collection<IPersistanceFeeder>(DATABASE_FEEDERS_COLLECTION)
      .get();

    return snapshot.docs.map(documentSnapshot =>
      FeederMapper.toDomain({
        ...documentSnapshot.data(),
        id: documentSnapshot.id,
      }),
    );
  },

  async findAllById(id: string) {
    const userId = new firestore.FieldPath('user', 'id');

    const snapshot = await firestore()
      .collection<IPersistanceFeeder>(DATABASE_FEEDERS_COLLECTION)
      .where(userId, '==', id)
      .get();

    return snapshot.docs.map(documentSnapshot =>
      FeederMapper.toDomain({
        ...documentSnapshot.data(),
        id: documentSnapshot.id,
      }),
    );
  },

  async update(feeder: IDomainFeeder) {
    firestore()
      .collection(DATABASE_FEEDERS_COLLECTION)
      .doc(feeder.id)
      .set(FeederMapper.toPersistance(feeder));
  },

  async delete(id: string) {
    firestore().collection(DATABASE_FEEDERS_COLLECTION).doc(id).delete();
  },

  watchFeeders(onChange: (feeders: IDomainFeeder[]) => void) {
    return firestore()
      .collection<IPersistanceFeeder>(DATABASE_FEEDERS_COLLECTION)
      .onSnapshot(collectionSnapshot =>
        onChange(
          collectionSnapshot.docs.map(document =>
            FeederMapper.toDomain({
              ...document.data(),
              id: document.id,
            }),
          ),
        ),
      );
  },
};
