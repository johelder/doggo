import type { IDomainFeeder } from '@src/types/domain/feeder';
import type { IPersistanceFeeder } from '@src/types/persistance/feeder';

export const FeederMapper = {
  toPersistance(domainFeeder: IDomainFeeder): IPersistanceFeeder {
    return {
      user_id: domainFeeder.userId,
      coordinates: domainFeeder.coordinates,
      address: {
        street: domainFeeder.address.street,
        house_number: domainFeeder.address.houseNumber,
        neighborhood: domainFeeder.address.neighborhood,
        city: domainFeeder.address.city,
        complement: domainFeeder.address.complement,
        reference: domainFeeder.address.reference,
      },
      foods: domainFeeder.foods,
    };
  },

  toDomain(persistanceFeeder: IPersistanceFeeder): IDomainFeeder {
    return {
      userId: persistanceFeeder.user_id,
      coordinates: persistanceFeeder.coordinates,
      address: {
        street: persistanceFeeder.address.street,
        houseNumber: persistanceFeeder.address.house_number,
        neighborhood: persistanceFeeder.address.neighborhood,
        city: persistanceFeeder.address.city,
        complement: persistanceFeeder.address.complement,
        reference: persistanceFeeder.address.reference,
      },
      foods: persistanceFeeder.foods,
    };
  },
};
