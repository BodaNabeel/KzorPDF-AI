import openai from "/config/openai";

export default async function (req, res) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      const userMessage = body.message;
      const customMsg =
        "From the provided document, answer this query: " + userMessage;
      const document = body.doc;
      const messages = [
        {
          role: "system",
          content:
            "Act as an assistant who analyzes large documents and then answers queries regarding it and is able to summarize, point out critical information and provide better insights from the document.",
        },
        { role: "user", content: customMsg },
        { role: "assistant", content: document },
      ];

      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: messages,
        });
        const UID = completion.id;
        const reply = completion.choices;
        const response = {
          uid: UID,
          reply: reply[0],
        };
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).send({ error: "Internal Server Error." });
      }

    default:
      return res.status(400).json({ error: "Method not Allowed" });
  }
}
