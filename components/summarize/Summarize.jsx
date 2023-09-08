import React, { useState } from "react";
import PDFSection from "./PDFSection";
import ChatSection from "./ChatSection";
import { IconMessage, IconNotes } from "@tabler/icons-react";
function Summarize() {
  const [selectedOption, setSelectedOption] = useState(0);
  function Header({ children }) {
    return (
      <div className="lg:w-[50%] lg:h-screen">
        <div className="flex gap-5 px-2 py-2 h-[5%]">
          <span
            onClick={() => setSelectedOption(0)}
            className={`flex gap-1 items-center cursor-pointer   ${
              selectedOption === 0
                ? "text-primary-700 underline underline-offset-4"
                : null
            }`}
          >
            <IconMessage height={20} />
            <h1>Chat</h1>
          </span>
          <span
            onClick={() => setSelectedOption(1)}
            className={`flex gap-1 items-center cursor-pointer  ${
              selectedOption === 1
                ? "text-primary-700 underline underline-offset-4"
                : null
            }`}
          >
            <IconNotes height={20} />
            <h1>Notes</h1>
          </span>
        </div>
        <div className="h-[95%] ">{children}</div>
      </div>
    );
  }
  return (
    <section className="lg:h-screen h-max  w-[100%] flex flex-col lg:flex-row">
      <PDFSection />
      <Header>
        {selectedOption === 0 ? (
          <ChatSection />
        ) : (
          <h1>This is notes section</h1>
        )}
      </Header>
    </section>
  );
}

export default Summarize;
