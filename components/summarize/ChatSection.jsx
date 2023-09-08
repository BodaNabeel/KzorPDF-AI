import React, { useEffect, useRef, useState } from "react";

import { IconSend } from "@tabler/icons-react";

function ChatSection() {
  const DUMMY_DATA = [
    {
      text: "Welcome to the AI model - a single place to ask all your queries related to a PDF/Book. It has been built by Nabeel Boda & will love to listen to your feedback. heya! like share & subscribe to our x.com/bodanabeel :)",
      user: false,
    },
    {
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam corrupti ad nihil praesentium. Praesentium eos, aut odit obcaecati nobis veniam, et minus ad voluptate quam iste adipisci, maxime libero quos explicabo.  ectetur adipisicing elit. Veritatis quibusdam corrupti ad nihil praesentium. Praesentium eos, aut odit obcaecati nobis veniam, et minus ad voluptate",
      user: true,
    },
    {
      text: "Welcome to the AI model - a single place to ask all your queries related to a PDF/Book. It has been built by Nabeel Boda & will love to listen to your feedback. heya! like share & subscribe to our x.com/bodanabeel :)",
      user: false,
    },
    {
      text: "Welcome to the AI model - a single place to ask all your queries related to a PDF/Book. It has been built by Nabeel Boda & will love to listen to your feedback. heya! like share & subscribe to our x.com/bodanabeel :)",
      user: false,
    },
    {
      text: "ectetur adipisicing elit. Veritatis quibusdam corrupti ad nihil praesentium. Praesentium eos, aut odit obcaecati nobis veniam, et minus ad voluptate ectetur adipisicing elit. Veritatis quibusdam corrupti ad nihil praesentium. Praesentium eos, aut odit obcaecati nobis veniam, et minus ad voluptate ectetur adipisicing elit. Veritatis quibusdam corrupti ad nihil praesentium. Praesentium eos, aut odit obcaecati nobis veniam, et minus ad voluptate ectetur adipisicing elit. Veritatis quibusdam corrupti ad nihil praesentium. Praesentium eos, aut odit obcaecati nobis veniam, et minus ad voluptate",
      user: true,
    },
  ];
  const inputRef = useRef();
  const chatContainerRef = useRef();
  const [chat, setChat] = useState(DUMMY_DATA);
  function scrollToBottom() {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);
  return (
    <div className=" bg-white flex flex-col justify-between h-full ">
      <div
        ref={chatContainerRef}
        className="overflow-y-auto flex flex-col  px-4 pt-2 h-[90%] scroll-smooth"
      >
        {chat.map((data, index) => {
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
            let arr = [...chat];
            arr.push({ text: inputRef.current.value, user: true });
            setChat(arr);
            console.log(chat);
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
