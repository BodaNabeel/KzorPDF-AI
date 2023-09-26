import { DataContext } from "@/context/context";
import React, { useContext, useState } from "react";

function TestChat() {
  const { contextElement, setContextElement } = useContext(DataContext);
  const [componentElement, setComponentElement] = useState([{ name: "John" }]);
  function updateContext() {
    console.log("trigger");
    setContextElement((currentState) => [...currentState, { amount: "360" }]);
  }

  return (
    <>
      <h1>Length 1: {contextElement.length}</h1>
      <h1>Length 2: {componentElement.length}</h1>
      <button
        onClick={() =>
          setComponentElement((currentState) => [
            ...currentState,
            { name: "doe" },
          ])
        }
      >
        Update element state
      </button>
      <button onClick={() => updateContext()}>Update context state</button>
    </>
  );
}

export default TestChat;
