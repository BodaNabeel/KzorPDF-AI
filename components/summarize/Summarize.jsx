import React, { useState } from "react";
import PDFSection from "./PDFSection";
import ChatSection from "./ChatSection";
import Header from "@/utils/Header";
function Summarize() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <section className="lg:h-screen h-max  w-[100%] flex flex-col lg:flex-row">
      <PDFSection />
      <Header
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      >
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
