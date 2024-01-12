import openai from "/config/openai";

export default async function handler(req, res) {
  const { prompt } = await req.body;
  let reply = [];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: prompt }],
  });
  for await (const chunk of response) {
    reply = reply + chunk.choices[0].delta.content;
    // reply.push(chunk.choices[0].delta.content);
  }

  console.log(reply);
  // const filteredArrayOfResponse = reply.pop();
  // console.log(reply);
  // const replyFromAI = filteredArrayOfResponse.join(" ");
  // console.log(replyFromAI);
  // console.log()
  // console.log(reply);
  return res.status(200).json(reply);
}
