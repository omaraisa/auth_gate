"use server";

import { z } from "zod";
import { createToken, deleteToken } from "../lib/token";
import { redirect } from "next/navigation";

const testUser = {
  id: "1",
  email: "i@m.cool",
  password: "82js72h1/113s",
};

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }).trim(),
});

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }
    await createToken(testUser.id);

    redirect("http://localhost:3000");
}

export async function logout() {
    await deleteToken();
    redirect("/login");
}