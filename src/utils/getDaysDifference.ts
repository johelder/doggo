const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

export function getDaysDifference(date: Date) {
  if (!date) {
    return 0;
  }

  return Math.round(
    (date.getTime() - new Date().getTime()) / DAY_IN_MILLISECONDS,
  );
}
