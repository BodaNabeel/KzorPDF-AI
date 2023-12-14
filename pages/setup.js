import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
export default () => (
  <>
    <button onClick={() => signIn("google")}>Sign in with Google</button>
    <button onClick={() => signOut()}>Sign out</button>
  </>
);
