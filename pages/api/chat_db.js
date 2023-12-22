import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default async (req, res) => {
  const { method, body } = req;
  const supabaseServerClient = createPagesServerClient({
    req,
    res,
  });
  const user = await supabaseServerClient.auth.getUser();
  switch (method) {
    case "POST":
      try {
        const { error } = await supabaseServerClient
          .from("chat")
          .insert({ content: body.chat_content, is_user: body.is_user });
        return res.status(200);
      } catch (error) {
        res.status(500).json({ error: error });
      }
      break;
    case "PUT":
      try {
        const { error } = await supabaseServerClient
          .from("chat")
          .update({ is_bookmarked: body.creatingBookmark })
          .eq("chat_id", body.chat_id);

        console.log("working");

        if (error) {
          throw new Error("Supabase error");
        }

        return res
          .status(200)
          .json({ message: "Bookmark updated successfully" });
      } catch (err) {
        console.error("Error:", err.message);
      }

      break;
    default:
      return res.status(400).json({ error: "Method not allowed." });
  }
};
