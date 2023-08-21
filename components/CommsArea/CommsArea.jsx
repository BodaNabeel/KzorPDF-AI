import React from "react";
import PreviewPDF from "./PreviewPDF";
import ChatSection from "./ChatSection";

function CommsArea() {
  return (
    <section className="min-h-screen max-h-screen  w-[100%] flex flex-col lg:flex-row">
      <PreviewPDF />
      <ChatSection />
    </section>
  );
}

export default CommsArea;
