import { cookies } from "next/headers";

export async function isAdminMode(): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const store = await cookies();
  return store.get("admin_session")?.value === secret;
}
