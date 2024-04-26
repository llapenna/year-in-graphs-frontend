'use client';
import { useEffect } from 'react';

import { setCookies } from './actions';

interface Props {
  searchParams?: Record<string, string | string[]>;
}
const View = ({ searchParams }: Props) => {
  const token = searchParams?.jwt as string | undefined;

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
    <div>
      <h1>You&apos;ll be redirected!</h1>
      <p>{JSON.stringify(searchParams, null, 2)}</p>
    </div>
  );
};

export default View;
