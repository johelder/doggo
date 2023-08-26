import firestore from '@react-native-firebase/firestore';

import { DATABASE_FEEDERS_COLLECTION } from '../constants';

import type { IFeeder, TMaintenanceStatus, IUser } from '@src/types';

export const FeedersRepository = {
  async create(feeder: IFeeder) {
    firestore().collection(DATABASE_FEEDERS_COLLECTION).add(feeder);
  },

  async findById(id: string) {
    const feeder = await firestore()
      .collection<IFeeder>(DATABASE_FEEDERS_COLLECTION)
      .doc(id)
      .get();

    const data = feeder.data();

    if (!data) {
      return null;
    }

    return { ...data, id: feeder.id };
  },

  async findAll() {
    const snapshot = await firestore()
      .collection<IFeeder>(DATABASE_FEEDERS_COLLECTION)
      .get();

    return snapshot.docs.map(documentSnapshot => ({
      ...documentSnapshot.data(),
      id: documentSnapshot.id,
    }));
  },

  async findAllById(id: string) {
    const userId = new firestore.FieldPath('user', 'id');

    const snapshot = await firestore()
      .collection<IFeeder>(DATABASE_FEEDERS_COLLECTION)
      .where(userId, '==', id)
      .get();

    return snapshot.docs.map(documentSnapshot => ({
      ...documentSnapshot.data(),
      id: documentSnapshot.id,
      ref: documentSnapshot.ref,
    }));
  },

  async update(feeder: IFeeder) {
    firestore()
      .collection(DATABASE_FEEDERS_COLLECTION)
      .doc(feeder.id)
      .set(feeder);
  },

  async updateMaintenance(
    maintenanceStatus: TMaintenanceStatus[],
    feederId: string,
    user: IUser,
  ) {
    const payload = {
      updatedAt: firestore.FieldValue.serverTimestamp(),
      updatedBy: {
        userId: user.id,
        userName: user.name,
      },
    };

    if (maintenanceStatus.length > 1) {
      firestore()
        .collection(DATABASE_FEEDERS_COLLECTION)
        .doc(feederId)
        .update({
          maintenanceStatus: {
            supply: payload,
            cleaning: payload,
          },
        });

      return;
    }

    if (maintenanceStatus.includes('supply')) {
      firestore().collection(DATABASE_FEEDERS_COLLECTION).doc(feederId).update({
        'maintenanceStatus.supply': payload,
      });

      return;
    }

    firestore().collection(DATABASE_FEEDERS_COLLECTION).doc(feederId).update({
      'maintenanceStatus.cleaning': payload,
    });
  },

  async delete(id: string) {
    firestore().collection(DATABASE_FEEDERS_COLLECTION).doc(id).delete();
  },

  async deleteAllFeedersByUserId(id: string) {
    const allFeeders = await this.findAllById(id);

    const batch = firestore().batch();

    allFeeders.forEach(document => {
      batch.delete(document.ref);
    });

    batch.commit();
  },

  watchFeeders(onChange: (feeders: IFeeder[]) => void) {
    return firestore()
      .collection<IFeeder>(DATABASE_FEEDERS_COLLECTION)
      .onSnapshot(collectionSnapshot =>
        onChange(
          collectionSnapshot.docs.map(document => ({
            ...document.data(),
            id: document.id,
          })),
        ),
      );
  },
};
