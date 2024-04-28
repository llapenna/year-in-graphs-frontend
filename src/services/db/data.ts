import { Data, User } from '@prisma/client';
import { prisma } from './instance';
import { info } from '@/utils/logger';

export type LastYearData = Pick<Data, 'id' | 'mood' | 'createdAt'>[];
/**
 * Get data from the last year for a user.
 * @param id User's database id
 * @returns Data from the last year containing `id`, `mood`, and `createdAt` properties.
 */
export const getLastYearData = async (
  id: User['id']
): Promise<LastYearData> => {
  const lastYear = new Date();
  lastYear.setFullYear(lastYear.getFullYear() - 1);

  return prisma.data.findMany({
    where: {
      userId: id,
      createdAt: {
        gte: lastYear,
      },
    },
    select: {
      id: true,
      mood: true,
      createdAt: true,
    },
  });
};

/**
 * Get data for a specific day.
 * @param userId Id of the user.
 * @param date When was the data recorded?
 * @returns Data for the given day.
 */
export const getDayData = async (userId: User['id'], date: Date) => {
  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(startDate);
  endDate.setHours(23, 59, 59, 999);

  return prisma.data.findFirst({
    where: {
      userId,
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
  });
};
