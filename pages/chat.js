import { useChat } from "ai/react";
import { useRef } from "react";

// Optional but recommended: use the Edge Runtime. This can only be done at the page level, not inside nested components.
// export const runtime = "experimental-edge";

export default function IndexPage() {
  const ref = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(ref.current.value);
    const response = await fetch("api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: ref.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.replace(/\.undefined$/, ""));
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="input">Prompt</label>
      <input
        name="prompt"
        // value={input}
        // onChange={handleInputChange}
        id="input"
        ref={ref}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
