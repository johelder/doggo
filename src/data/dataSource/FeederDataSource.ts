import firestore from '@react-native-firebase/firestore';

import {
  FeederPersistance,
  MaintenanceStatusPersistance,
  UserPersistance,
} from '../models/persistence';

import {
  FIRESTORE_FEEDERS_COLLECTION,
  FIRESTORE_USERS_COLLECTION,
} from './constants';

async function create(feeder: Omit<FeederPersistance, 'id'>): Promise<void> {
  await firestore()
    .collection<Omit<FeederPersistance, 'id'>>(FIRESTORE_FEEDERS_COLLECTION)
    .add(feeder);
}

async function findById(id: string): Promise<FeederPersistance | null> {
  const feeder = await firestore()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .doc(id)
    .get();

  const data = feeder.data();

  if (!data) {
    return null;
  }

  return { ...data, id: feeder.id };
}

async function findAllByUserId(id: string): Promise<FeederPersistance[]> {
  const userId = new firestore.FieldPath('user', 'id');

  const snapshot = await firestore()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .where(userId, '==', id)
    .get();

  if (snapshot.empty) {
    return [];
  }

  return snapshot.docs.map(documentSnapshot => ({
    ...documentSnapshot.data(),
    id: documentSnapshot.id,
  }));
}

function findAll(onChange: (feeders: FeederPersistance[]) => void): () => void {
  return firestore()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .onSnapshot(collectionSnapshot =>
      onChange(
        collectionSnapshot.docs.map(document => ({
          ...document.data(),
          id: document.id,
        })),
      ),
    );
}

async function remove(id: string): Promise<void> {
  await firestore()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .doc(id)
    .delete();
}

async function update(feeder: FeederPersistance): Promise<void> {
  firestore()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .doc(feeder.id)
    .set(feeder);
}

async function updateMaintenance(
  status: Array<keyof MaintenanceStatusPersistance>,
  feederId: string,
  user: Pick<UserPersistance, 'id' | 'name'>,
): Promise<void> {
  const isBothUpdate = status.length > 1;

  const payload = {
    updated_at: firestore.FieldValue.serverTimestamp(),
    updated_by: {
      user_id: user.id,
      user_name: user.name,
    },
  };

  if (isBothUpdate) {
    firestore()
      .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
      .doc(feederId)
      .update({
        maintenance_status: {
          supply: payload,
          cleaning: payload,
        },
      });

    return;
  }

  if (status.includes('supply')) {
    firestore().collection(FIRESTORE_FEEDERS_COLLECTION).doc(feederId).update({
      'maintenanceStatus.supply': payload,
    });

    return;
  }

  firestore().collection(FIRESTORE_FEEDERS_COLLECTION).doc(feederId).update({
    'maintenanceStatus.cleaning': payload,
  });
}

async function deleteAllByUserId(id: string): Promise<void> {
  const snapshot = await firestore()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .where(new firestore.FieldPath('user', 'id'), '==', id)
    .get();

  const batch = firestore().batch();

  snapshot.forEach(document => {
    batch.delete(document.ref);
  });

  batch.commit();
}

async function findAllFavoritesByUserId(
  id: string,
): Promise<FeederPersistance[]> {
  const user = await firestore()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(id)
    .get();

  const userFavorites = user.data()?.favorites;

  if (!userFavorites?.length) {
    return [];
  }

  const snapshot = await firestore()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .where(firestore.FieldPath.documentId(), 'in', userFavorites)
    .get();

  return snapshot.docs.map(documentSnapshot => ({
    ...documentSnapshot.data(),
    id: documentSnapshot.id,
  }));
}

export const FeederDataSource = {
  create,
  findById,
  findAllByUserId,
  findAll,
  remove,
  update,
  updateMaintenance,
  deleteAllByUserId,
  findAllFavoritesByUserId,
};
