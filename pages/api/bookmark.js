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
        const { data, error } = await supabaseServerClient
          .from("bookmark")
          .insert({ content: body.bookmark_content, chat_id: body.chat_id });
        return res.status(200).json({ data });
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
    case "DELETE":
      const { error } = await supabaseServerClient
        .from("bookmark")
        .delete()
        .eq("chat_id", body.chat_id);
      return res.status(200);
      break;
    default:
      return res.status(400).json({ error: "Method not allowed." });
  }
};
