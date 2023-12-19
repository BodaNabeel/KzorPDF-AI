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
  }
};
