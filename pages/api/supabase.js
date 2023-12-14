import supabase from "@/config/supabaseClient";
import openai from "/config/openai";

export default async function (req, res) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { method, body } = req;
  try {
    switch (method) {
      case "POST":
        const person = body.input;
        const { error } = await supabase.from("demo").insert({
          id: 115999,
          person: "naveed",
          user_id: `1b2db075-3ea2-41d3-8bb8-b818fe53292e`,
        });
        return res.status(200).json(error);
      case "GET":
        // const { data, error } = await supabase.from("demo").select();
        const refreshToken = req.cookies["my-refresh-token"];
        const accessToken = req.cookies["my-access-token"];
        return res.status(200).json(accessToken);

      default:
        return res.status(400).json({ error: "Method not allowed" });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      error: error.message,
    });
  }
}
