import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";

export default function SignUp() {
  const supabaseClient = useSupabaseClient();
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      "http://localhost:3000/";
    // Make sure to include `https://` when not localhost.
    url = url.includes("http") ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === "/home" ? url : `${url}/home`;
    return url;
  };

  async function handleLogin() {
    // const { data, error } = await supabaseClient.auth.signInWithOAuth({
    //   provider: "google",
    //   options: {
    //     queryParams: {
    //       access_type: "offline",
    //       redirectTo: getURL(),
    //     },
    //   },
    // });
    console.log(getURL());
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
