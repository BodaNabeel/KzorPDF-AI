import openai from "@/utils/configuration";
export default async function (req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      const userMessage = body.message;
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userMessage },
        ],
      });

      const response = completion.choices[0];
      return res.status(200).json(response);

    default:
      return res.status(400).json({ error: "Method not Allowed" });
  }
}
