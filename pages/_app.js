import "@/styles/globals.css";
import { DataProvider } from "../context/context";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <DataProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </DataProvider>
    </SessionProvider>
  );
}
