// import supabase from "@/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";

export default function Auth() {
  const supabase = createClientComponentClient();

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
    const user = await supabase.auth.getUser();
    console.log(user);
  };
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT" || event === "USER_DELETED") {
      // delete cookies on sign out
      const expires = new Date(0).toUTCString();
      document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
      document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
    } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
      const maxAge = 100 * 365 * 24 * 60 * 60; // 100 years, never expires
      document.cookie = `my-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
      document.cookie = `my-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
    }
  });

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
