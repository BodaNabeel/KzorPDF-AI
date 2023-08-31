import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [overlay, setOverlay] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        onClick={() => setOverlay(false)}
        className={`h-full w-full bg-[#81818165] z-40 ${
          overlay ? "absolute" : "hidden"
        }`}
      ></div>
      <Navbar className="" />
      <main className="w-screen ">
        <Component overlay={overlay} setOverlay={setOverlay} {...pageProps} />
      </main>
    </div>
  );
}
