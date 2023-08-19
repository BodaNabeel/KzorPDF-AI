import Navbar from "@/components/nav-bar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex">
      <Navbar className=""/>
      <main className="w-screen">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
