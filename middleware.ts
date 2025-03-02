import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/token";

export default async function middleware(req: NextRequest) {
  // Get the session token from cookies
  const cookie = (await cookies()).get("authToken")?.value;
  if (cookie) {
    const token = await decrypt(cookie);

    if (token?.userId) {
      const currentTime = Math.floor(Date.now() / 1000);
      if (token.exp && token.exp > currentTime) {
        console.log("User is logged in. Redirecting");
        return NextResponse.redirect(new URL("http://localhost:3000", req.url));
      }
  }
  return NextResponse.redirect(new URL("/", req.url));
}
}