import "../styles/globals.css";
import { DataProvider } from "../context/context";
import supabase from "../config/supabaseClient";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import NProgress from "nprogress"; //nprogress module
import Router from "next/router";
import "../styles/nprogress.css";

export default function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  const [supabaseClient, setSupabaseClient] = useState(
    createPagesBrowserClient()
  );

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <DataProvider>
        <main>
          <Toaster position="bottom-right" reverseOrder={false} />
          <Component {...pageProps} />
        </main>
      </DataProvider>
    </SessionContextProvider>
  );
}
