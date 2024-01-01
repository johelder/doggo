import { UserDomain } from '../models/domain';
import { UserPersistance } from '../models/persistence';

function toDomain(user: UserPersistance): UserDomain {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    photo: user.photo,
    favorites: user.favorites,
  };
}

function toPersistance(user: UserDomain): UserPersistance {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    photo: user.photo,
    favorites: user.favorites,
  };
}

export const UserMapper = { toDomain, toPersistance };
