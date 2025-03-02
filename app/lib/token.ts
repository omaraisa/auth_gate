import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.TOKEN_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createToken(userId: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const token = await encrypt({ userId, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set("authToken", token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function deleteToken() {
  const cookieStore = await cookies();
  cookieStore.delete("authToken");
}

type TokenPayload = {
  userId: string;
  expiresAt: Date;
};

export async function encrypt(payload: TokenPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encodedKey);
}

export async function decrypt(token: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify auth token", error);
  }
}