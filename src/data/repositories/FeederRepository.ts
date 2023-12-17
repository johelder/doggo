import { FeederDataSource } from '../dataSource';
import { FeederMapper } from '../mappers';
import { FeederDomain } from '../models/domain';

async function create(feeder: Omit<FeederDomain, 'id'>): Promise<void> {
  await FeederDataSource.create(FeederMapper.toPersistance(feeder));
}

async function findAllByUserId(id: string): Promise<FeederDomain[]> {
  const response = await FeederDataSource.findAllByUserId(id);
  return response.map(FeederMapper.toDomain);
}

function findAll(onChange: (feeders: FeederDomain[]) => void) {
  return FeederDataSource.findAll(feeders => {
    const formatted = feeders.map(FeederMapper.toDomain);
    onChange(formatted);
  });
}

async function remove(id: string): Promise<void> {
  await FeederDataSource.remove(id);
}

export const FeederRepository = {
  create,
  findAllByUserId,
  findAll,
  remove,
};
