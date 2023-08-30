import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <Navbar className="" />
      <main className="w-screen ">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
