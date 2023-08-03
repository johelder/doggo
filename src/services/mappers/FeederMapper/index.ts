import type { IDomainFeeder } from '@src/types/domain/feeder';
import type { IPersistanceFeeder } from '@src/types/persistance/feeder';

export const FeederMapper = {
  toPersistance(domainFeeder: IDomainFeeder): IPersistanceFeeder {
    const commonFeederAttributes = {
      user: {
        id: domainFeeder.user.id,
        name: domainFeeder.user.name,
      },
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
      maintenance_status: {
        supply: {
          updated_at: domainFeeder.maintenanceStatus.supply.updatedAt,
          updated_by: {
            user_id: domainFeeder.maintenanceStatus.supply.updatedBy.userId,
            user_name: domainFeeder.maintenanceStatus.supply.updatedBy.userName,
          },
        },
        cleaning: {
          updated_at: domainFeeder.maintenanceStatus.cleaning.updatedAt,
          updated_by: {
            user_id: domainFeeder.maintenanceStatus.cleaning.updatedBy.userId,
            user_name:
              domainFeeder.maintenanceStatus.cleaning.updatedBy.userName,
          },
        },
      },
    };

    if (domainFeeder?.id) {
      return {
        ...commonFeederAttributes,
        id: domainFeeder.id,
      };
    }

    return commonFeederAttributes;
  },

  toDomain(persistanceFeeder: IPersistanceFeeder): IDomainFeeder {
    return {
      id: persistanceFeeder.id,
      user: {
        id: persistanceFeeder.user.id,
        name: persistanceFeeder.user.name,
      },
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
      maintenanceStatus: {
        supply: {
          updatedAt: persistanceFeeder.maintenance_status.supply.updated_at,
          updatedBy: {
            userId:
              persistanceFeeder.maintenance_status.supply.updated_by.user_id,
            userName:
              persistanceFeeder.maintenance_status.supply.updated_by.user_name,
          },
        },
        cleaning: {
          updatedAt: persistanceFeeder.maintenance_status.cleaning.updated_at,
          updatedBy: {
            userId:
              persistanceFeeder.maintenance_status.cleaning.updated_by.user_id,
            userName:
              persistanceFeeder.maintenance_status.cleaning.updated_by
                .user_name,
          },
        },
      },
    };
  },
};
