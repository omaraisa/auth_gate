'use server'

import { cookies } from 'next/headers';

export const serverAuthenticateArcGIS = async (
    username: string,
    password: string
  ): Promise<{ token: string; expires: number } | null> => {
    try {
      const params = new URLSearchParams({
        username,
        password,
        client: 'referer',
        referer: process.env.NEXT_PUBLIC_GEOPORTAL_URL || '/',
        f: 'json',
      });
  
    const response = await fetch(
      process.env.NEXT_PUBLIC_PORTAL_TOKEN_SERVICE_URL || '',
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      }
    );
  
      const data = await response.json();
  
      if (data.error) {
        console.error('ArcGIS Token Error:', data.error);
        return null;
      }

      return {
      token: data.token,
      expires: data.expires,
    };
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  
  export async function isArcgisTokenValid(): Promise<boolean> {
    const cookieStore = await cookies();
    const token = cookieStore.get('arcgis_token');
    const expires = cookieStore.get('arcgis_token_expiry');
  
    if (!token || !expires) return false;

    const expiryTime = parseInt(expires.value);
    return Date.now() < expiryTime - 120000; // 2 minutes buffer
  }


  