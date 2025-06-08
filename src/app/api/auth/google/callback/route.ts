import { createSession } from "@/src/lib/session";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");
  const userId = searchParams.get("userId");
  const name = searchParams.get("name") as string;

  if (!accessToken || !refreshToken || !userId) {
    throw new Error("Google OAuth failed");
  }

  await createSession({
    accessToken,
    refreshToken,
    user: {
        id: userId,
        name
    }
  });

  redirect("/")
}
