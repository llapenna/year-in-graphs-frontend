'use server';
import { Activity } from '@/components/graphs/activity';
import { getLastYearData } from '@/services/db/data';

export const Body = async () => {
  const data = await getLastYearData(1);

  return (
    <>
      <h1>Last year&apos;s data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Activity records={data}></Activity>
    </>
  );
};

const Home = async () => {
  return (
    <div>
      <Body></Body>
    </div>
  );
};

export default Home;
