import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

function ChatSection() {
  return (
    <div className="min-h-[100%] lg:w-[50%] bg-white">
      <div className="flex justify-between px-2 py-2">
        <h1 className="font-semibold">Chat</h1>
        <div>
          <TrashIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
        </div>
      </div>
      <div className="h-[90%] overflow-y-auto">
        {/* <div className="h-[320rem] bg-white"></div> */}
      </div>
      <div className="flex w-[95%] mx-auto  rounded-md overflow-hidden">
        <input
          type="text"
          className="w-[95%] border-[2px] outline-none pl-3 border-r-gray-400"
          placeholder="Ask your question..."
        />

        <button className="bg-[#4865ff] py-1 px-4">
          <PaperAirplaneIcon className="h-6 w-6 text-white " />
        </button>
      </div>
    </div>
  );
}

export default ChatSection;
