import React, { useState } from "react";
import PDFSection from "./PDFSection";
import ChatSection from "./ChatSection";
import Header from "../../utils/Header";
import NoteSection from "./NoteSection";

function Summarize() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <section className="lg:h-screen h-max  w-[100%] flex flex-col lg:flex-row">
      <PDFSection />
      <Header
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
        <div className=" bg-white flex flex-col justify-between h-full ">
          {selectedOption === 0 ? <ChatSection /> : <NoteSection />}
        </div>
      </Header>
    </section>
  );
}

export default Summarize;
