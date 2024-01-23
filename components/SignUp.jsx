import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import getURL from "../utils/getURL";

export default function SignUp() {
  const supabaseClient = useSupabaseClient();
  async function handleLogin() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
        },
        redirectTo: `${getURL()}api/auth/callback/route`,
      },
    });
  }
  return (
    <button
      onClick={handleLogin}
      className=" lg:w-[50%] w-[90%]  border-[1px] border-primary-300 flex items-center justify-center gap-3 mt-8 py-1 px-5 rounded-md "
    >
      <Image height={17} width={17} src="/images/google.svg" />
      <p className="font-medium text-lg ">Sign in with Google</p>
    </button>
  );
}
