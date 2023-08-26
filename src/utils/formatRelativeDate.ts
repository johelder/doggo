import { getDaysDifference } from './getDaysDifference';

const TODAY = -0;
const YESTERDAY = -1;

export function formatRelativeDate(date: Date) {
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
