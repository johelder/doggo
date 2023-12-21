import { UserDataSource } from '../dataSource';
import { UserMapper } from '../mappers/User';
import { UserDomain } from '../models/domain';

async function create(user: UserDomain) {
  await UserDataSource.create(UserMapper.toPersistance(user));
}

export const UserRepository = { create };
