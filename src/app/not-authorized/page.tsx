import { BOT_USERNAME } from '@/utils/config';

import { main } from './styles';

const Usage = () => {
  const telegramLink = `https://t.me/${BOT_USERNAME}?start`;
  return (
    <p>
      Go to{' '}
      <code>
        <a href={telegramLink}>@{BOT_USERNAME}</a>
      </code>{' '}
      and use the <code>/graphs</code> command to authenticate.
    </p>
  );
};

const Page = () => {
  const classes = main();
  return (
    <div className={classes.wrapper}>
      <div className={classes.titleContainer}>
        <h1>401</h1>
        <p>Not authorized</p>
      </div>
      <Usage></Usage>
    </div>
  );
};

export default Page;
