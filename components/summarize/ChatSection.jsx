import React, { useEffect, useRef, useState } from "react";
import { IconSend } from "@tabler/icons-react";
function ChatSection() {
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [chat, setChat] = useState([]);
  const [responseFromGPT, setResponseFromGPT] = useState(null);
  function scrollToBottom() {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
  function updateChat(response, isUser) {
    console.log(chat, chat.length);
    let arr = [];
    if (chat.length > 0) {
      console.log("run");
      setChat((currentState) => [
        ...currentState,
        {
          text: response,
          user: isUser,
        },
      ]);
    } else {
      console.log("sudo run");

      setChat([{ text: response, user: isUser }]);
    }
  }
  function updateClientMessage() {
    if (inputRef.current.value) {
      updateChat(inputRef.current.value, true);
    }
  }
  const fetchMessage = async () => {
    const userMessage = inputRef.current.value;

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    updateChat(data.message.content, false);
  };
  useEffect(() => {
    scrollToBottom();
  }, [chat]);
  return (
    <div className=" bg-white flex flex-col justify-between h-full ">
      <div
        ref={chatContainerRef}
        className="overflow-y-auto flex flex-col  px-4 pt-2 h-[90%] scroll-smooth"
      >
        {chat.length > 0 &&
          chat.map((data, index) => {
            if (!data.user) {
              return (
                <div
                  key={index}
                  className="bg-[#f9f9fe] mb-5 w-[77%] self-start rounded-md px-4 py-2 border-[1px] rounded-tl-none"
                >
                  <h1>{data.text}</h1>
                </div>
              );
            }
            if (data.user) {
              return (
                <div
                  key={index}
                  className="bg-primary-400 text-white mb-5 w-[77%] self-end rounded-md px-4 py-4 rounded-tr-none border-[1px]"
                >
                  <h1>{data.text}</h1>
                </div>
              );
            }
          })}
      </div>
      <div className="flex h-[5%]  w-[95%] mx-auto  overflow-hidden gap-2 pb-1">
        <input
          ref={inputRef}
          type="text"
          className="w-[95%] border-[2px] outline-none pl-3 border-r-gray-400 bg-white"
          placeholder="Ask your question..."
        />

        <button
          onClick={() => {
            updateClientMessage();
            fetchMessage();
          }}
          className="bg-primary-400 text-white py-1 px-4"
        >
          <IconSend />
        </button>
      </div>
    </div>
  );
}

export default ChatSection;