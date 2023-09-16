import openai from "@/utils/configuration";
export default async function (req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      const userMessage = body.message;
      const document = body.doc;
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Act as an assistant who analyzes large documents and then answer queries regarding it and is able to summarize, point of critical information and better insights from the document.",
          },
          { role: "user", content: userMessage },
          { role: "assistant", content: document },
        ],
      });

      const response = completion.choices[0];
      console.log(document);
      // console.log(response);
      return res.status(200).json(response);

    default:
      return res.status(400).json({ error: "Method not Allowed" });
  }
}
