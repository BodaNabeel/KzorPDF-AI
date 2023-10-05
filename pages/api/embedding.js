import openai from "/utils/configuration";

export default async function (req, res) {
  const { method, body } = req;
  try {
    switch (method) {
      case "POST":
        const toEmbedText = body.input;
        const embedding = await openai.embeddings.create({
          model: "text-embedding-ada-002",
          input: toEmbedText,
        });
        return res.status(200).json(embedding);
      default:
        return res.status(400).json({ error: "Method not allowed" });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      error: error.message,
    });
  }
}
