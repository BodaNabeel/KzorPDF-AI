import OpenAI from "openai";
export async function getStaticProps() {
  const res = process.env.OPENAI_API_KEY;

  return { props: { res } };
}

export default function ChatGPT({ res }) {
  const openai = new OpenAI({
    apiKey: res,
    dangerouslyAllowBrowser: true,
  });
  async function getRes() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices);
  }
  getRes();

  return <h1> The secrect key: {res}</h1>;
}
