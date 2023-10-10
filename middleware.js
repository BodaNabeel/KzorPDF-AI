import { NextResponse } from "next/server";
import supabase from "./config/supabaseClient";

export async function middleware(request) {
  try {
    const isUser = await supabase.auth.getUser();
    const session = await supabase.auth.getSession();

    if (session === null) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  } catch (error) {
    // Handle any errors that occur during session retrieval or redirection here.
    console.error("Error in middleware:", error);
    // Optionally, you can redirect to an error page or take other actions.
  }
}

export const config = {
  matcher: "/summarize",
};
