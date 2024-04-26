import { LastYearData } from '@/services/db/data';
import { css } from '@/styles/css';

import { getLastYearDays, dateToString as d2s } from './utils';
import { Day } from './day';
import { activity } from './styles';

interface OffsetProps {
  by: number;
}
const Offset = ({ by }: OffsetProps) => {
  'use client';
  return (
    <div
      className={css({
        display: by === 0 ? 'none' : 'block',
        gridRow: by,
      })}
    ></div>
  );
};

interface Props {
  records: LastYearData;
}
export const Activity = ({ records }: Props) => {
  const days = getLastYearDays();
  // Transform the records into a map for easier access
  const recordMap = new Map(records.map((r) => [d2s(r.createdAt), r]));

  return (
    <div>
      <h1>Activity</h1>
      <div className={activity()}>
        {/* Uses the first day to apply an offset depending on the day. */}
        <Offset by={days[0].getDay()}></Offset>

        {days.map((date, i) => {
          const record = recordMap.get(d2s(date));
          return <Day key={i} date={date} mood={record?.mood ?? 0}></Day>;
        })}
      </div>
    </div>
  );
};
