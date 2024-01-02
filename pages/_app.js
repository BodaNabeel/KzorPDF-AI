import "../styles/globals.css";
import { DataProvider } from "../context/context";
import supabase from "../config/supabaseClient";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  // const [supabaseClient] = useState(() => createPagesBrowserClient());
  const [supabaseClient, setSupabaseClient] = useState(
    createPagesBrowserClient()
  );
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    // START VALUE - WHEN LOADING WILL START
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    // COMPLETE VALUE - WHEN LOADING IS FINISHED
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, []);

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <DataProvider>
        <main>
          <Toaster position="bottom-right" reverseOrder={false} />
          <LoadingBar
            color="rgb(180, 130, 251)"
            progress={progress}
            waitingTime={400}
            onLoaderFinished={() => {
              setProgress(0);
            }}
          />
          <Component {...pageProps} />
        </main>
      </DataProvider>
    </SessionContextProvider>
  );
}
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
