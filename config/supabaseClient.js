import { createClient } from "@supabase/supabase-js";
import { useSession } from "next-auth/react";
// const session = useSession();
// const { supabaseAccessToken } = useSession();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
  // { db: { schema: "next_auth" } }
  // {
  //   global: {
  //     headers: {
  //       Authorization: `Bearer ${supabaseAccessToken}`,
  //     },
  //   },
  // }
);

export default supabase;
