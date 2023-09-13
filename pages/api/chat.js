import openai from "@/utils/Configuration";
import { NextApiRequest, NextApiResponse } from "next";
export default async function (req, res) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "What is 2+2?" },
    ],
  });

  const response = completion;
  res.status(200).json(response);
}
