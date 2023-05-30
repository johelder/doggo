import database from '@react-native-firebase/database';
import { FeederMapper } from '@src/services/mappers/FeederMapper';

import { DATABASE_FEEDERS_REF } from './constants';
import type { IDomainFeeder } from '@src/types/domain/feeder';

export const FeedersRepository = {
  async create(feeder: IDomainFeeder) {
    const newReference = database().ref(DATABASE_FEEDERS_REF).push();

    await newReference.set(FeederMapper.toPersistance(feeder));
  },
};
