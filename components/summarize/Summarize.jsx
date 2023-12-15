import React, { useState } from "react";
import PDFSection from "./PDFSection";
import ChatSection from "./ChatSection";
import Header from "@/utils/Header";
import NoteSection from "./NoteSection";
import { getSession, useSession } from "next-auth/react";
import supabase from "@/config/supabaseClient";
import { createClient } from "@supabase/supabase-js";

function Summarize() {
  const [selectedOption, setSelectedOption] = useState(0);
  const { data: session, status } = useSession();
  // console.log(session);
  const supabaseAccessToken = session;
  // console.log(session.supabaseAccessToken);
  // console.log(session);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY,
    { db: { schema: "next_auth" } },
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    }
  );

  const supabase_demo = async () => {
    // const { error } = await supabase.from("demo").insert({ id: 360 });
    const { data, error } = await supabase.from("users").select();
    console.log(data, error);
  };
  const user = async () => {
    const user_info = await getSession();
    console.log(user_info);
  };
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
      <button onClick={user}>Click me</button>
      <button onClick={supabase_demo}>Click me supabase</button>
    </section>
  );
}

export default Summarize;
