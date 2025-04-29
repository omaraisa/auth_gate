'use server';

import { cookies } from 'next/headers';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { serverAuthenticateArcGIS } from  '../lib/authenticateArcGIS';

export async function login(prevState: {
  errors: {
    username?: string[] | undefined;
    password?: string[] | undefined;
  };
} | undefined, formData: FormData) {
  const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(4),
  });

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
  return {
    errors: parsed.error.flatten().fieldErrors,
  };
  }

  const { username, password } = parsed.data;

  const tokenData = await serverAuthenticateArcGIS(username, password);

  if (tokenData) {
  const cookieStore = await cookies();
  cookieStore.set('arcgis_token', tokenData.token, {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires: new Date(tokenData.expires),
  });

  cookieStore.set('arcgis_token_expiry', tokenData.expires.toString(), {
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires: new Date(tokenData.expires),
  });

  redirect('http://192.168.1.60/geoportal/');
  }

  return {
  errors: {
    username: ['Invalid username or password'],
  },
  };
}
