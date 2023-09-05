import React from "react";
import PDFSection from "./PDFSection";
import ChatSection from "./ChatSection";

function Summarize() {
  return (
    <section className="lg:min-h-screen lg:max-h-screen  w-[100%] flex flex-col lg:flex-row">
      <PDFSection />
      <ChatSection />
    </section>
  );
}

export default Summarize;
