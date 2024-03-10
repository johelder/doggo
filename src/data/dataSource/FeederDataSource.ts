import database from '@react-native-firebase/firestore';

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
  await database()
    .collection<Omit<FeederPersistance, 'id'>>(FIRESTORE_FEEDERS_COLLECTION)
    .add(feeder);
}

async function findById(id: string): Promise<FeederPersistance | null> {
  const feeder = await database()
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
  const userId = new database.FieldPath('user', 'id');

  const snapshot = await database()
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
  return database()
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
  await database()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .doc(id)
    .delete();
}

async function update(feeder: FeederPersistance): Promise<void> {
  database()
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
    updated_at: database.FieldValue.serverTimestamp(),
    updated_by: {
      user_id: user.id,
      user_name: user.name,
    },
  };

  if (isBothUpdate) {
    database()
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
    database().collection(FIRESTORE_FEEDERS_COLLECTION).doc(feederId).update({
      'maintenance_status.supply': payload,
    });

    return;
  }

  database().collection(FIRESTORE_FEEDERS_COLLECTION).doc(feederId).update({
    'maintenance_status.cleaning': payload,
  });
}

async function deleteAllByUserId(id: string): Promise<void> {
  const snapshot = await database()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .where(new database.FieldPath('user', 'id'), '==', id)
    .get();

  const batch = database().batch();

  snapshot.forEach(document => {
    batch.delete(document.ref);
  });

  batch.commit();
}

async function findAllFavoritesByUserId(
  id: string,
): Promise<FeederPersistance[]> {
  const user = await database()
    .collection<UserPersistance>(FIRESTORE_USERS_COLLECTION)
    .doc(id)
    .get();

  const userFavorites = user.data()?.favorites;

  if (!userFavorites?.length) {
    return [];
  }

  const snapshot = await database()
    .collection<FeederPersistance>(FIRESTORE_FEEDERS_COLLECTION)
    .where(database.FieldPath.documentId(), 'in', userFavorites)
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
