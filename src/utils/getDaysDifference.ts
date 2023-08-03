const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

export function getDaysDifference(date: Date) {
  return Math.round((date.getTime() - new Date().getTime()) / DAY_MILLISECONDS);
}
