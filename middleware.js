import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import supabase from "./config/supabaseClient";

export async function middleware(req) {
  const res = NextResponse.next();
  // const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getSession();
  if (!user) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/summarize", "/library", "/"],
};
