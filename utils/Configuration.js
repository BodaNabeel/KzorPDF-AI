import OpenAI from "openai";
const openai = new OpenAI({
  api_key: process.env.OPENAI_API_KEY,
});
export default openai;
