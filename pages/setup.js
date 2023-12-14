import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import supabase from "@/config/supabaseClient";

const signInUser = async () => {
  signIn("google");
  const { error } = await supabase.from("users_new").insert({ id: 2 });
};
export default () => (
  <>
    <button onClick={signInUser}>Sign in with Google</button>
    <button onClick={() => signOut()}>Sign out</button>
  </>
);
