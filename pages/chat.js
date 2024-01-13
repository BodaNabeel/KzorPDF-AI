import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

export default function IndexPage() {
  const [respond, setRespond] = useState("");

  const ref = useRef();

  const handleSubmit = async (e) => {
    const prompt = ref.current.value;
    e.preventDefault();
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      console.log(response.body);
    }

    const data = response.body;
    if (!data) {
      return;
    }
    const onParseGPT = (event) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? "";
          setRespond((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    };
    const onParse = onParseGPT;
    const reader = data.getReader();
    const decoder = new TextDecoder();
    const parser = createParser(onParse);
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      parser.feed(chunkValue);
    }
    if (done) {
      console.log("All response recorded");
      console.log(respond);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">Prompt</label>
      <p> {respond}</p>
      <input name="prompt" id="input" ref={ref} />
      <button type="submit">Submit</button>
    </form>
  );
}
