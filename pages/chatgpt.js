import { useEffect, useState } from "react";

export default function Chat() {
  const [reply, setReply] = useState(null);
  useEffect(() => console.log(reply), [reply]);

  const getReply = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify("How is the weather right now in Kashmir?"),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch("/api/chat", options);
    const data = await res.json();
    setReply(data);
  };

  return <button onClick={getReply}> Click to fetch the response!</button>;
}
