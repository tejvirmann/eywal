import { NextRequest, NextResponse } from "next/server";

const COOKIE = "admin_session";
const ONE_YEAR = 60 * 60 * 24 * 365;

export async function POST(req: NextRequest) {
  const { password } = await req.json() as { password: string };
  const secret = process.env.ADMIN_SECRET;

  if (!secret || password !== secret) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, secret, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: ONE_YEAR,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, "", { maxAge: 0, path: "/" });
  return res;
}
