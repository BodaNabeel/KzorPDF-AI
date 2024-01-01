import React, { useState } from "react";
import PDFSection from "./PDFSection";
import ChatSection from "./ChatSection";
import Header from "../../utils/Header";
import NoteSection from "./NoteSection";

function Summarize({ fileURL, document_id }) {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <section className="lg:h-screen h-max  w-[100%] flex flex-col lg:flex-row">
      <PDFSection fileURL={fileURL} />
      <Header
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
        <div className=" bg-white flex flex-col  h-full ">
          {selectedOption === 0 ? (
            <ChatSection document_id={document_id} />
          ) : (
            <NoteSection document_id={document_id} />
          )}
        </div>
      </Header>
    </section>
  );
}

export default Summarize;
