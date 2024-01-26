import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default async (req, res) => {
  const { method, body } = req;
  const supabaseServerClient = createPagesServerClient({
    req,
    res,
  });

  const user = await supabaseServerClient.auth.getUser();
  const user_id = user.data.user.id;

  switch (method) {
    case "POST":
      const { data: folderData, error: folderDataError } =
        await supabaseServerClient
          .from("collection")
          .select()
          .eq("user_id", user_id)
          .ilike("collection_name", body.input);
      if (folderData.length === 0) {
        try {
          const { error } = await supabaseServerClient
            .from("collection")
            .insert({ collection_name: body.input });
          return res.status(200).json({ message: "Collection added." });
        } catch (error) {
          return res.status(500).json({ error: error });
        }
      }
    case "GET":
      const { data, error: folderError } = await supabaseServerClient
        .from("collection")
        .select()
        .eq("user_id", user_id);
      if (data.length > 0) {
        return res.status(200).json(data);
      } else {
        return res.status(400).json({ error: "not found" });
      }
    case "DELETE":
      const { error } = await supabaseServerClient
        .from("collection")
        .delete()
        .eq("collection_id", body.collection_id);
      if (error) {
        console.log(error);
        return res.status(400).josn({ error: "could not delete collection" });
      } else {
        return res.status(200).json({ message: "collection deleted" });
      }
  }
};
