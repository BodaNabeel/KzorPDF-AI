import supabase from "@/config/supabaseClient";
import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
// import supabase from "@/config/supabaseClient";

const signInUser = async () => {
  signIn("google");
  // const { error } = await supabase.from("users_new").insert({ id: 2 });
};
// const { data: session, status } = useSession();
// const { supabaseAccessToken } = session;
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY,
//   { db: { schema: "next_auth" } },
//   {
//     global: {
//       headers: {
//         Authorization: `Bearer ${supabaseAccessToken}`,
//       },
//     },
//   }
// );
const supabase_demo = async () => {
  // const { error } = await supabase.from("demo").insert({ id: 360 });
  const { data, error } = await supabase.from("users").select();
  console.log(data, error);
};
export default () => (
  <>
    <button onClick={signInUser}>Sign in with Google</button>
    <button onClick={() => signOut()}>Sign out</button>
    <button onClick={() => supabase_demo()}>fuck it</button>
  </>
);
