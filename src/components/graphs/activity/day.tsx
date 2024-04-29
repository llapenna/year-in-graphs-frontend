import Link from 'next/link';

import { day } from './styles';
import { dateToString as d2s, validatedMood } from './utils';

const days: Record<number, string> = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

interface DayProps {
  date: Date;
  mood: number;
}
export const Day = ({ date, mood }: DayProps) => {
  const stringDate = d2s(date);
  const classes = day({ level: validatedMood(mood) });

  return (
    <div className={classes.wrapper}>
      <Link
        className={classes.link}
        href={`/view/${stringDate}`}
        scroll={false}
      ></Link>

      <div className={classes.tooltip}>
        {d2s(date)} ({mood})
      </div>
    </div>
  );
};
