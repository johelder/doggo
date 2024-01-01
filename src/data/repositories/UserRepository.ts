import { UserDataSource } from '../dataSource';
import { UserMapper } from '../mappers';
import { UserDomain } from '../models/domain';

async function create(user: UserDomain) {
  await UserDataSource.create(UserMapper.toPersistance(user));
}

async function findById(id: string): Promise<UserDomain | null> {
  const response = await UserDataSource.findById(id);

  if (!response) {
    return null;
  }

  return UserMapper.toDomain(response);
}

async function findFavoriteFeederById(
  userId: string | undefined,
  feederId: string,
): Promise<string> {
  if (!userId) {
    throw new Error('userId property is mandatory');
  }

  const response = await UserDataSource.findFavoriteFeederById(
    userId,
    feederId,
  );

  return response;
}

async function addFavoriteFeeder(
  userId: string | undefined,
  feederId: string,
): Promise<void> {
  if (!userId) {
    throw new Error('userId property is mandatory');
  }

  await UserDataSource.addFavoriteFeeder(userId, feederId);
}

async function removeFavoriteFeeder(
  userId: string | undefined,
  feederId: string,
): Promise<void> {
  if (!userId) {
    throw new Error('userId property is mandatory');
  }

  await UserDataSource.removeFavoriteFeeder(userId, feederId);
}

async function remove(id: string): Promise<void> {
  await UserDataSource.remove(id);
}

export const UserRepository = {
  create,
  findById,
  findFavoriteFeederById,
  addFavoriteFeeder,
  removeFavoriteFeeder,
  remove,
};
