// import supabase from "@/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import supabase from "../../config/supabaseClient";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function Auth() {
  const supabaseClient = useSupabaseClient();

  const createUser = async () => {
    await supabase.auth.signUp({
      email: "bodanabeel001@gmail.com",
      password: "ProductionTest123",
      // options: {
      //   emailRedirectTo: `${location.origin}/auth/callback`,
      // },
    });
  };
  const signInUser = async () => {
    await supabaseClient.auth.signInWithPassword({
      // email: "bodanabeel001@gmail.com",
      email: "nabeelboda0@gmail.com",
      password: "ProductionTest123",
    });
  };

  const signOutUser = async () => {
    await supabaseClient.auth.signOut();
  };
  const getUser = async () => {
    const user = await supabaseClient.auth.getUser();
    console.log(user);
  };

  return (
    <>
      <div>
        <h1> Creating user section</h1>
        <button onClick={createUser} className="border-2 border-black">
          Create a user
        </button>
      </div>
      <div>
        <h1> Login user section</h1>
        <button onClick={signInUser} className="border-2 border-black">
          Login a user
        </button>
      </div>
      <div>
        <h1> Logout user section</h1>
        <button onClick={signOutUser} className="border-2 border-black">
          Logout
        </button>
        <button onClick={getUser}>Show user</button>
      </div>
    </>
  );
}
