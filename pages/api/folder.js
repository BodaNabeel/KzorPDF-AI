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
      try {
        const { data: folderData, error: folderDataError } =
          await supabaseServerClient
            .from("folder")
            .select()
            .eq("user_id", user_id)
            .ilike("folder_name", body.input);
        if (folderData.length === 0) {
          const { data, error } = await supabaseServerClient
            .from("folder")
            .insert({ folder_name: body.input });
          if (error) res.status(500).json({ message: error.message });
          return res
            .status(200)
            .json({ message: "Folder inserted successfully" });
        } else {
          return res
            .status(400)
            .json({ message: "Folder name already exist." });
        }
      } catch (error) {
        return res.status(500).json({ error: error });
      }

    // TODO: Look properly into the edge cases here (for now working well)
    case "GET":
      try {
        const { data: folderData, error: folderDataError } =
          await supabaseServerClient
            .from("folder")
            .select()
            .eq("user_id", user_id);
        if (folderData.length === 0) {
        } else {
          return res.status(200).json(folderData);
        }
      } catch (error) {
        return res.select(400).json({ error: "Failed to perform action." });
      }

    case "DELETE":
      try {
        const { error } = await supabaseServerClient
          .from("folder")
          .delete()
          .eq("folder_id", body.input);
        if (error) {
          console.log(error);
          throw new Error("Supabase error");
        }
        return res.status(200).json({ message: "Folder deleted." });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Error found!" });
      }
    default:
      return res.status(400).json({ error: "Method not allowed." });
  }
};
