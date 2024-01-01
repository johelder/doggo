import { Optional } from '@types';

import { FeederDomain } from '../models/domain';
import { FeederPersistance } from '../models/persistence';

function toDomain(feeder: FeederPersistance): FeederDomain {
  return {
    id: feeder.id,
    address: {
      city: feeder.address.city,
      houseNumber: feeder.address.house_number,
      neighborhood: feeder.address.neighborhood,
      street: feeder.address.street,
      complement: feeder.address.complement,
      reference: feeder.address.reference,
    },
    coordinates: feeder.coordinates,
    foods: feeder.foods,
    maintenanceStatus: {
      supply: {
        updatedAt: feeder.maintenance_status.supply.updated_at,
        updatedBy: {
          userId: feeder.maintenance_status.supply.updated_by.user_id,
          userName: feeder.maintenance_status.supply.updated_by.user_name,
        },
      },
      cleaning: {
        updatedAt: feeder.maintenance_status.cleaning.updated_at,
        updatedBy: {
          userId: feeder.maintenance_status.cleaning.updated_by.user_id,
          userName: feeder.maintenance_status.cleaning.updated_by.user_name,
        },
      },
    },
    user: feeder.user,
  };
}

function toPersistance(
  feeder: Optional<FeederDomain, 'id'>,
): Optional<FeederPersistance, 'id'> {
  const formattedFeeder: Omit<FeederPersistance, 'id'> = {
    address: {
      city: feeder.address.city,
      house_number: feeder.address.houseNumber,
      neighborhood: feeder.address.neighborhood,
      street: feeder.address.street,
      complement: feeder.address.complement,
      reference: feeder.address.reference,
    },
    coordinates: feeder.coordinates,
    foods: feeder.foods,
    maintenance_status: {
      supply: {
        updated_at: feeder.maintenanceStatus.supply.updatedAt,
        updated_by: {
          user_id: feeder.maintenanceStatus.supply.updatedBy.userId,
          user_name: feeder.maintenanceStatus.supply.updatedBy.userName,
        },
      },
      cleaning: {
        updated_at: feeder.maintenanceStatus.cleaning.updatedAt,
        updated_by: {
          user_id: feeder.maintenanceStatus.cleaning.updatedBy.userId,
          user_name: feeder.maintenanceStatus.cleaning.updatedBy.userName,
        },
      },
    },
    user: {
      id: feeder.user.id,
      name: feeder.user.name,
    },
  };

  if (feeder.id) {
    return { ...formattedFeeder, id: feeder.id };
  }

  return formattedFeeder;
}

export const FeederMapper = {
  toDomain,
  toPersistance,
};
