import Summarize from "../../components/summarize/Summarize";
import { DataContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import NavbarLayout from "../../layout/NavbarLayout";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default function SummarizePage({
  document_text,
  chatData,
  bookmarkData,
}) {
  const { setDocumentData, setChatData, setBookmark } = useContext(DataContext);

  const temporaryID = "abc";
  useEffect(() => {
    if (document_text) {
      setDocumentData(document_text);
    }
    if (chatData) setChatData(chatData);
    if (bookmarkData) setBookmark(bookmarkData);
  }, []);

  return (
    <NavbarLayout>
      <Summarize />
    </NavbarLayout>
  );
}

export async function getServerSideProps(context) {
  // File
  const filePath = path.join(process.cwd(), "public", "final_report.pdf");
  const dataBuffer = fs.readFileSync(filePath);
  const document_text = await pdf(dataBuffer).then((data) => {
    return data.text;
  });

  // Supabase Configs
  const supabase = createPagesServerClient(context);
  const user = await supabase.auth.getUser();
  const user_id = user.data.user.id;

  // Chat
  const { data: chatData, error: chatDataError } = await supabase
    .from("chat")
    .select()
    .eq("user_id", user_id);

  // Bookmark

  const { data: bookmarkData, error: bookmarkDataError } = await supabase
    .from("chat")
    .select()
    .eq("user_id", user_id)
    .eq("is_bookmarked", true);

  return { props: { document_text, chatData, bookmarkData } };
}
