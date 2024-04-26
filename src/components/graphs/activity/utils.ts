/**
 * Transforms a date into a string in the format of 'YYYY-MM-DD'.
 * @param date Date to transform into a string.
 * @returns A date in the format of 'YYYY-MM-DD'.
 */
export const dateToString = (date: Date) => {
  return date.toISOString().split('T')[0];
};

/**
 * Get the dates of the last year. Including today.
 * @returns An array of dates.
 */
export const getLastYearDays = () => {
  const today = new Date();

  const lastYear = new Date(today);
  lastYear.setFullYear(lastYear.getFullYear() - 1);

  const days = [];
  do {
    days.push(new Date(lastYear));
    lastYear.setDate(lastYear.getDate() + 1);
  } while (dateToString(lastYear) !== dateToString(today));

  // also push today
  days.push(today);

  return days;
};

type ValidMood = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
/**
 * Validates a mood value.
 * @param mood Mood value from the DB.
 * @returns A valid mood value or undefined.
 */
export const validatedMood = (mood: number): ValidMood => {
  if (!mood || mood < 0 || mood > 10) return undefined;
  else return mood as ValidMood;
};
