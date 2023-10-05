import React, { useContext, useEffect, useRef, useState } from "react";
import { IconBookmark, IconSend, IconBookmarkOff } from "@tabler/icons-react";
import { DataContext } from "@/context/context";
function ChatSection() {
  const { documentData, setDocumentData } = useContext(DataContext);
  const chatContainerRef = useRef(null);
  const [chat, setChat] = useState([]);
  const [responding, setResponding] = useState(false);
  const [value, setValue] = useState(undefined);
  const inputRef = useRef(null);
  const [EmbeddedDocument, setEmbeddedDocument] = useState([]);
  const [EmbeddedQuery, setEmbeddedQuery] = useState([]);
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
  const embedding = async (doc, isQuery) => {
    const response = await fetch("api/embedding", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        body: JSON.stringify({
          input: doc,
        }),
      },
    });
    const data = await response.json();
    if (data.error) {
      console.log("error detected: ", data.error);
    } else {
      if (isQuery) {
        const tempEmbed = [...EmbeddedQuery];
        tempEmbed.push(data.data[0].embedding);
        setEmbeddedQuery(tempEmbed);
      } else {
        const tempEmbed = [...EmbeddedDocument];
        tempEmbed.push(data.data[0].embedding);
        setEmbeddedDocument(tempEmbed);
      }
    }
  };
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
    if (inputRef.current.value !== "") {
      setResponding(true);
      const message = inputRef.current.value;
      console.log(message);
      embedding(message, true);
      updateChat(message, true, null);
      fetchMessage(message);
      inputRef.current.value = "";
    }
  }
  function DynamicRenderBookmarkIcon({ noteID }) {
    const isNote = documentData[0].abc.notes.findIndex(
      (chat) => chat.id === noteID
    );
    if (isNote !== -1) return <IconBookmarkOff />;
    else return <IconBookmark />;
  }
  const fetchMessage = async (value) => {
    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: value,
        doc: documentData[0].abc.document_text,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const formattedReply = data.reply.message.content.split("\n");
        const id = data.uid;
        setResponding(false);
        updateChat(formattedReply, false, id);
      })
      .catch((error) => {
        setResponding(false);
      });
  };
  // embedding(documentData[0]?.abc?.document_text, false);
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

  // Checking similarity
  const similarityScore = [];

  return (
    <>
      <div
        ref={chatContainerRef}
        className="overflow-y-auto flex flex-col  px-4 pt-2 h-[90%] "
      >
        {documentData[0]?.abc.chat.length > 0 &&
          documentData[0]?.abc.chat.map((data, index) => {
            if (!data?.user) {
              return (
                <div key={index} className=" mb-5 w-[77%] self-start flex">
                  <div className="bg-[#f9f9fe]  rounded-md rounded-tl-none  border-[1px] px-2 py-4 ">
                    {data.text.map((element, index) => (
                      <div key={index}>
                        {element} <br />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <button onClick={() => updateNotes(data)}>
                      <DynamicRenderBookmarkIcon noteID={data.id} />
                    </button>
                  </div>
                </div>
              );
            } else if (data?.user) {
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
    </>
  );
}

export default ChatSection;
