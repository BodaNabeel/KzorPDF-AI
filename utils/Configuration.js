import OpenAI from "openai";
// const configuration = new Configuration({
//   apiKey: "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",
// });
const openai = new OpenAI({
  api_key: process.env.OPENAI_API_KEY,
});
export default openai;
