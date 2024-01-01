import Summarize from "../../../components/summarize/Summarize";
import { DataContext } from "../../../context/context";
import { useContext, useEffect } from "react";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import NavbarLayout from "../../../layout/NavbarLayout";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";

export default function SummarizePage({
  document_text,
  chatData,
  bookmarkData,
  fileURL,
  document_id,
}) {
  const { setDocumentData, setChatData, setBookmark } = useContext(DataContext);

  useEffect(() => {
    if (document_text) {
      setDocumentData(document_text);
    }
    if (chatData) setChatData(chatData);
    if (bookmarkData) setBookmark(bookmarkData);
  }, []);

  return (
    <NavbarLayout>
      <Summarize fileURL={fileURL} document_id={document_id} />
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
  const user_id = user?.data?.user?.id;

  //   Path information
  const { document_id, document_path } = context.query;

  // Chat
  const { data: chatData, error: chatDataError } = await supabase
    .from("chat")
    .select()
    .eq("document_id", document_id);

  // Bookmark
  const { data: bookmarkData, error: bookmarkDataError } = await supabase
    .from("chat")
    .select()
    .eq("document_id", document_id)
    .eq("is_bookmarked", true);

  // Get File Link
  const { data: fileURL, error: fileURLError } = await supabase.storage
    .from(`kzor/${user_id}`)
    .createSignedUrl(document_path, 3600);

  if (!fileURL) {
    return {
      redirect: {
        permanent: false,
        destination: "/summarize",
      },
    };
  }

  return {
    props: { document_text, chatData, bookmarkData, fileURL, document_id },
  };
}
