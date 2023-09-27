import React, { useContext, useEffect, useRef, useState } from "react";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconSend,
} from "@tabler/icons-react";
import { DataContext } from "@/context/context";
function ChatSection() {
  const { setNotes, documentData, setDocumentData } = useContext(DataContext);
  const chatContainerRef = useRef(null);
  const [chat, setChat] = useState([]);
  const [responding, setResponding] = useState(false);
  const [value, setValue] = useState(undefined);
  const inputRef = useRef(null);

  const temporaryData = [...documentData];

  useEffect(() => {
    scrollToBottom();
  }, [chat]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "0px";
      const scrollHeight = inputRef.current.scrollHeight;

      inputRef.current.style.height = scrollHeight + "px";
    }
  }, [inputRef.current, value]);

  function scrollToBottom() {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
  function updateChat(response, isUser, id) {
    setChat((currentState) => [
      ...currentState,
      { text: response, user: isUser, id: id },
    ]);
    temporaryData[0].abc.chat.push({ id: id, user: isUser, text: response });
    setDocumentData(temporaryData);
  }
  function updateNotes(noteData) {
    const temporaryNotes = [...documentData[0].abc.notes];
    const existing = temporaryNotes.findIndex(
      (note) => note.id === noteData.id
    );
    if (existing !== -1) {
      temporaryNotes.splice(existing, 1);
    } else {
      temporaryNotes.push({ id: noteData.id, note: noteData.text });
    }
    temporaryData[0].abc.notes = temporaryNotes;
    setDocumentData(temporaryData);
  }
  function updateClientMessage() {
    if (value) {
      setValue(null);
      setResponding(true);
      const message = inputRef.current.value;
      updateChat(message, true, null);
      fetchMessage(message);
      inputRef.current.value = "";
    }
  }
  const fetchMessage = async (value) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: value,
        doc: documentData[0].abc.document_text,
      }),
    });
    const data = await response.json();
    const formattedReply = data.reply.message.content.split("\n");
    const id = data.uid;
    setResponding(false);
    updateChat(formattedReply, false, id);
  };
  function Loading() {
    return (
      <div className="chat-bubble">
        <div className="typing">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }

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
                <div key={index} className=" mb-5 w-[77%] self-start flex">
                  <div className="bg-[#f9f9fe]  rounded-md rounded-tl-none  border-[1px] px-2 py-4 ">
                    {data.text.map((element, index) => (
                      <div key={index}>
                        {element} <br />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      // setNotes((currentState) => [...currentState, { data }])
                      updateNotes(data)
                    }
                  >
                    <IconBookmark className="hover:bg-primary-50 " />
                  </button>
                </div>
              );
            } else if (data.user) {
              return (
                <div
                  key={index}
                  className="bg-primary-400 text-white mb-5 w-[77%] self-end rounded-md px-4 py-4 rounded-tr-none border-[1px]"
                >
                  <h1>{data.text}</h1>
                  <button onClick={() => console.log(data)}>
                    click me mate!!
                  </button>
                </div>
              );
            }
          })}
        {responding ? <Loading /> : null}
      </div>

      <div className="flex items-center overflow-hidden  border-2  border-s_grey-50 px-2 py-2 mb-2 rounded-lg shadow-[0px_48px_100px_10px_#110c2e26] mx-5 gap-2 max-h-[20%]">
        <textarea
          onChange={(event) => setValue(event.target.value)}
          ref={inputRef}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              updateClientMessage();
              event.preventDefault();
            }
          }}
          className="text-area w-[95%] max-h-[100%]  outline-none pl-3 border-r-gray-400 bg-white resize-none"
        ></textarea>

        <button
          onClick={() => {
            updateClientMessage();
          }}
          className="bg-primary-400 rounded-md text-white py-2 px-2 self-end"
        >
          <IconSend />
        </button>
      </div>
    </div>
  );
}

export default ChatSection;
