import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { DataProvider } from "../context/context";
import Overlay from "@/utils/Overlay";
export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <DataProvider>
        <Overlay />
        <Navbar />
        <main className="w-screen ">
          <Component {...pageProps} />
        </main>
      </DataProvider>
    </div>
  );
}
