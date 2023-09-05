import React from "react";

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
    <div className=" bg-white flex flex-col justify-between h-full ">
      <div className="overflow-y-auto flex flex-col  px-4 pt-2 h-[95%]">
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
      <div className="flex h-[5%]  w-[95%] mx-auto  rounded-md overflow-hidden gap-2 pb-1">
        <input
          type="text"
          className="w-[95%] border-[2px] outline-none pl-3 border-r-gray-400 bg-white"
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
