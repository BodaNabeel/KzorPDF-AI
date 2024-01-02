import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default async (req, res) => {
  const { method, body } = req;
  const supabaseServerClient = createPagesServerClient({
    req,
    res,
  });

  const user = await supabaseServerClient.auth.getUser();
  const user_id = user.data.user.id;
  const bucket = "kzor";
  // console.log(body);

  switch (method) {
    case "DELETE":
      try {
        const { data: storageDataDelete, error: storageDataDeleteError } =
          await supabaseServerClient.storage
            .from(bucket)
            .remove(`${user_id}/${body.folder_id}/${body.document_path}`);
        const { error: databaseDeleteError } = await supabaseServerClient
          .from("document")
          .delete()
          .eq("document_id", body.document_id);
        return res
          .status(200)
          .json({ message: "Document removed successfully." });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
      }

    default:
      return res.status(400).json({ error: "Method not allowed." });
  }
};
