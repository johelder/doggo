import { FeederDataSource } from '../dataSource';
import { FeederMapper } from '../mappers';
import { FeederDomain } from '../models/domain';

async function create(feeder: Omit<FeederDomain, 'id'>): Promise<void> {
  await FeederDataSource.create(FeederMapper.toPersistance(feeder));
}

export const FeederRepository = {
  create,
};
