'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';

/**
 * Receives and verifies if the JWT toke nis valid
 * @param token Token received in the URL.
 */
export const setCookies = (token: string) => {
  try {
    // TODO: Add more verifications on the object returned by jwt.verify
    const { id } = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };
    console.log('Verified!', id);
    cookies().set('userId', id);
  } catch (e) {
    console.error('Invalid JWT found in URL. No cookies to set.', e);
  }

  redirect('/');
};
