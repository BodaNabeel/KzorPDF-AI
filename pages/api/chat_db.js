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
        const { error } = await supabaseServerClient
          .from("chat")
          .insert({ content: body.chat_content, is_user: body.is_user });
        return res.status(200);
      } catch (error) {
        res.status(500).json({ error: error });
      }

    default:
      return res.status(400).json({ error: "Method not allowed." });
  }
};
