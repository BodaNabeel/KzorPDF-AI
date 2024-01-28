import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { IconDotsCircleHorizontal } from "@tabler/icons-react";
import { useRouter } from "next/router";
import React from "react";

export default function SignOut() {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
      router.reload();
    }
  }
  return (
    <button
      onClick={signOut}
      className="flex gap-3 items-end focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-200 transition-all transition-75 rounded-md"
    >
      {<IconDotsCircleHorizontal stroke={1.5} className="h-6 w-6 text-black" />}{" "}
      <p>Logout</p>
    </button>
  );
}
