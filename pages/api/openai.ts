import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAISream";

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const config = {
  runtime: "edge",
};

const handler = async (req: Request, res: Response): Promise<Response> => {
  const { prompt, documentData } = (await req.json()) as {
    prompt?: string;
    documentData?: string;
  };
  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }
  const systemContent =
    `Answer questions from this doc: ${documentData}` ||
    "Default System Content";

  const payload: OpenAIStreamPayload = {
    // model: "gpt-4-turbo",
    model: "GPT-4o mini",
    messages: [
      { role: "system", content: systemContent },
      { role: "user", content: prompt },
    ],
    store: false,
    // temperature: 0.7,
    // top_p: 1,
    // frequency_penalty: 0,
    // presence_penalty: 0,
    // max_tokens: 200,
    // stream: true,
    // n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream, {
    headers: new Headers({
      "Cache-Control": "no-cache",
    }),
  });
};

export default handler;
