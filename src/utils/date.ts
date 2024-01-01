export const TODAY = -0;
export const YESTERDAY = -1;
export const LAST_FIFTEEN_DAYS = -15;
export const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function formatRelativeDate(date: Date) {
  const daysDifference = getDaysDifference(date);

  switch (daysDifference) {
    case TODAY:
      return 'hoje';
    case YESTERDAY:
      return 'ontem';

    default:
      return `há ${Math.abs(daysDifference)} dias`;
  }
}

function getDaysDifference(date: Date) {
  if (!date) {
    return 0;
  }

  return Math.round(
    (date.getTime() - new Date().getTime()) / DAY_IN_MILLISECONDS,
  );
}

export const date = {
  formatRelativeDate,
  getDaysDifference,
};
