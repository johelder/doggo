import firestore from '@react-native-firebase/firestore';

import { FeederPersistance } from '../models/persistence';

import { FIRESTORE_FEEDERS_COLLECTION } from './constants';

async function create(feeder: Omit<FeederPersistance, 'id'>): Promise<void> {
  await firestore()
    .collection<Omit<FeederPersistance, 'id'>>(FIRESTORE_FEEDERS_COLLECTION)
    .add(feeder);
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

export const FeederDataSource = {
  create,
  findAllByUserId,
  findAll,
  remove,
};
