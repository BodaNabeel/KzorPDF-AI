import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

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
  return (
    <div className="min-h-[100%] lg:w-[50%] w-[95vw] mx-auto bg-white flex flex-col justify-evenly ">
      <div className="flex justify-between px-2 py-2">
        <h1 className="font-semibold">Chat</h1>
        <div>
          <TrashIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="h-[88%] overflow-y-auto flex flex-col  px-4">
        {DUMMY_DATA.map((data, index) => {
          if (!data.user) {
            return (
              <div
                key={index}
                className="bg-[#f9f9fe] mb-5 w-[77%] self-start rounded-md px-4 py-2 border-2 rounded-tl-none"
              >
                <h1>{data.text}</h1>
              </div>
            );
          }
          if (data.user) {
            return (
              <div
                key={index}
                className="bg-[#4865ff] text-white mb-5 w-[77%] self-end rounded-md px-4 py-4 rounded-tr-none"
              >
                <h1>{data.text}</h1>
              </div>
            );
          }
        })}
      </div>
      <div className="flex w-[95%] mx-auto  rounded-md overflow-hidden ">
        <input
          type="text"
          className="w-[95%] border-[2px] outline-none pl-3 border-r-gray-400"
          placeholder="Ask your question..."
        />

        <button className="bg-[#4865ff] py-1 px-4">
          <PaperAirplaneIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ChatSection;
