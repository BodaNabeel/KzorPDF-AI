import Summarize from "../../components/summarize/Summarize";
import { DataContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import NavbarLayout from "../../layout/NavbarLayout";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default function SummarizePage({ document_text, data }) {
  const { setDocumentData, setChatData } = useContext(DataContext);

  const temporaryID = "abc";
  useEffect(() => {
    if (document_text) {
      setDocumentData(document_text);
    }
    if (data) setChatData(data);
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
  // Chat
  const supabase = createPagesServerClient(context);
  const user = await supabase.auth.getUser();
  const user_id = user.data.user.id;
  const { data, error } = await supabase
    .from("chat")
    .select()
    .eq("user_id", user_id);
  return { props: { document_text, data } };
}
