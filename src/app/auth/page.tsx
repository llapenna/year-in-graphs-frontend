'use client';
import { useEffect } from 'react';

import { setCookies } from './actions';
import { auth } from './styles';
import { title } from '@/styles/recipes';

interface Props {
  searchParams?: Record<string, string | string[]>;
}
const View = ({ searchParams }: Props) => {
  const token = searchParams?.jwt as string | undefined;
  const classes = auth();

  useEffect(() => {
    if (!token) {
      // No JWT, no cookies to set. Alert the user.
      console.error('No JWT found in URL. No cookies to set.');
      return;
    }

    // TODO: Add error handling in case the JWT is invalid or not received.
    setCookies(token);
  }, [token]);

  return (
    <div className={classes.wrapper}>
      <h1 className={title({ size: 'm' })}>You&apos;ll be redirected!</h1>
      <p className={classes.link}>
        If you&apos;re not automatically redirected, use{' '}
        <a href="/">this link</a> to go the home page.
      </p>
    </div>
  );
};

export default View;
