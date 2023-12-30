import { MaintenanceDomain, MaintenanceStatusDomain } from '@data';
import { LAST_FIFTEEN_DAYS, YESTERDAY, date } from '@utils';

export function useMaintenance({ supply, cleaning }: MaintenanceStatusDomain) {
  function getUpdaterUsers(
    firstUser: MaintenanceDomain['updatedBy']['userName'],
    secondUser: MaintenanceDomain['updatedBy']['userName'],
  ) {
    if (firstUser === secondUser) {
      return firstUser;
    }

    if (firstUser && secondUser) {
      return `${firstUser} e ${secondUser}`;
    }

    return firstUser ?? secondUser;
  }

  function isNeedMaintenance() {
    const lastSupplyUpdate = date.getDaysDifference(supply.updatedAt.toDate());
    const lastCleaningUpdate = date.getDaysDifference(
      cleaning.updatedAt.toDate(),
    );

    return (
      lastSupplyUpdate < YESTERDAY || lastCleaningUpdate < LAST_FIFTEEN_DAYS
    );
  }

  function getLastUpdateInformation() {
    return {
      supply: date.formatRelativeDate(supply.updatedAt.toDate()),
      cleaning: date.formatRelativeDate(cleaning.updatedAt.toDate()),
      users: getUpdaterUsers(
        supply.updatedBy.userName,
        cleaning.updatedBy.userName,
      ),
    };
  }

  return { isNeedMaintenance, getLastUpdateInformation };
}
