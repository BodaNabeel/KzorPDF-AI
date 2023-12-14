// import { createClient } from "@supabase/supabase-js";
// const supabase = createClient(
// //   process.env.NEXT_PUBLIC_SUPABASE_URL,
// //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// // );

// export default supabase;

import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
export default supabase;
