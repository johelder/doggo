import { FeederDataSource } from '../dataSource';
import { FeederMapper } from '../mappers';
import {
  FeederDomain,
  MaintenanceStatusDomain,
  UserDomain,
} from '../models/domain';
import { FeederPersistance } from '../models/persistence';

async function create(feeder: Omit<FeederDomain, 'id'>): Promise<void> {
  await FeederDataSource.create(FeederMapper.toPersistance(feeder));
}

async function findById(id: string): Promise<FeederDomain | null> {
  const response = await FeederDataSource.findById(id);

  if (!response) {
    return null;
  }

  return FeederMapper.toDomain(response);
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

async function update(feeder: FeederDomain): Promise<void> {
  await FeederDataSource.update(
    FeederMapper.toPersistance(feeder) as FeederPersistance,
  );
}

async function updateMaintenance(
  status: Array<keyof MaintenanceStatusDomain>,
  feederId: string,
  user: Pick<UserDomain, 'id' | 'name'>,
) {
  await FeederDataSource.updateMaintenance(status, feederId, user);
}

async function deleteAllByUserId(id: string): Promise<void> {
  await FeederDataSource.deleteAllByUserId(id);
}

export const FeederRepository = {
  create,
  findById,
  findAllByUserId,
  findAll,
  remove,
  update,
  updateMaintenance,
  deleteAllByUserId,
};
