// import supabase from "@/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import supabase from "@/config/supabaseClient";
import { useRouter } from "next/router";

export default function Auth() {
  // const supabase1 = createClientComponentClient();

  const createUser = async () => {
    await supabase.auth.signUp({
      email: "nabeelboda0@gmail.com",
      password: "ProductionTest123",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  const signInUser = async () => {
    await supabase.auth.signInWithPassword({
      email: "nabeelboda0@gmail.com",
      password: "ProductionTest123",
    });
  };

  const signOutUser = async () => {
    await supabase.auth.signOut();
  };

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
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
