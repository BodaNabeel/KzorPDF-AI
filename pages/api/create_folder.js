// Creating a new supabase server client object (e.g. in API route):
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default async (req, res) => {
  const { method, body } = req;
  const supabaseServerClient = createPagesServerClient({
    req,
    res,
  });

  const { data } = await supabaseServerClient
    .from("folder")
    .insert({ folder_name: body.input });
  console.log(body.input);
  res.status(200).json({ name: user?.name ?? "" });
};
