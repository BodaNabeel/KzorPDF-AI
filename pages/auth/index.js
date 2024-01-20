// import supabase from "@/config/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import supabase from "../../config/supabaseClient";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";

export default function Auth() {
  const supabaseClient = useSupabaseClient();

  const createUser = async () => {
    await supabase.auth.signUp({
      email: "bodanabeel002@gmail.com",
      password: "ProductionTest123",
      // options: {
      //   emailRedirectTo: `${location.origin}/auth/callback`,
      // },
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };
  const signInUser = async () => {
    await supabaseClient.auth.signInWithPassword({
      // email: "bodanabeel001@gmail.com",
      // email: "nabeelboda0@gmail.com",
      email: "nabeelboda0@gmail.com",
      password: "ProductionTest123",
    });
  };

  const signOutUser = async () => {
    await supabaseClient.auth.signOut();
  };
  const getUser = async () => {
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    console.log(user);
  };

  const googleAuth = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          // prompt: "consent",
          // redirectTo: "http://localhost:3000/home",
          // redirectTo: "http://localhost:3000/auth/callback",
        },
      },
    });
    console.log(data);
    console.log(error);
  };

  return (
    <>
      <Head>
        <title>Auth Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
      <div>
        <div
          id="g_id_onload"
          data-client_id="<client ID>"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleSignInWithGoogle"
          data-nonce=""
          data-auto_select="true"
          data-itp_support="true"
        ></div>
        <button onClick={googleAuth}>Google Auth</button>

        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div>
      </div>
    </>
  );
}
