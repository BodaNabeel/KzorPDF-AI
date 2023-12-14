import React, { useState } from "react";
import PDFSection from "./PDFSection";
import ChatSection from "./ChatSection";
import Header from "@/utils/Header";
import NoteSection from "./NoteSection";
import { useSession } from "next-auth/react";
function Summarize() {
  const [selectedOption, setSelectedOption] = useState(0);
  const data = useSession();
  // const supabase_demo = async () => {
  //   const response = await fetch("/api/supabase", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       input: "Elon Musk",
  //     }),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };
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
      <button onClick={() => console.log(data)}>Click me</button>
      {/* <button onClick={supabase_demo}>Click me</button> */}
    </section>
  );
}

export default Summarize;
