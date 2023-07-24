import { FeederMapper } from '../FeederMapper';

import type { IDomainUser } from '@src/types/domain';
import type { IPersistanceUser } from '@src/types/persistance';

export const UserMapper = {
  toPersistance(domainUser: IDomainUser): IPersistanceUser {
    return {
      id: domainUser.id,
      name: domainUser.name,
      email: domainUser.email,
      photo: domainUser.photo,
      favorites: domainUser.favorites.map(FeederMapper.toPersistance),
    };
  },

  toDomain(persistanceUser: IPersistanceUser): IDomainUser {
    return {
      id: persistanceUser.id,
      name: persistanceUser.name,
      email: persistanceUser.email,
      photo: persistanceUser.photo,
      favorites: persistanceUser.favorites.map(FeederMapper.toDomain),
    };
  },
};
