import Summarize from "../../components/summarize/Summarize";
import { DataContext } from "../../context/context";
import { useContext, useEffect } from "react";
// import fs from "fs";
// import path from "path";
import pdf from "pdf-parse";
import NavbarLayout from "../../layout/NavbarLayout";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";

// async function pdfParse(pdfLink) {
//   const document_text = await pdf(pdfLink).then((data) => data.text);
//   return document_text;
// }

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
  // Supabase Configs
  const supabase = createPagesServerClient(context);
  const user = await supabase.auth.getUser();
  const user_id = user?.data?.user?.id;

  //   Path information
  const collection_id = context.query.slug[0];
  const document_id = context.query.slug[1];
  const document_path = context.query.slug[2];

  // Chat
  const { data: chatData, error: chatDataError } = await supabase
    .from("chat")
    .select("*")
    .order("id", { ascending: true })
    .eq("document_id", document_id)
    .eq("user_id", user_id);

  // // Bookmark
  const { data: bookmarkData, error: bookmarkDataError } = await supabase
    .from("chat")
    .select()
    .eq("document_id", document_id)
    .eq("is_bookmarked", true)
    .eq("user_id", user_id);

  // Get File Link
  const { data: fileURL, error: fileURLError } = await supabase.storage
    .from(`kzor/${user_id}/${collection_id}`)
    .createSignedUrl(document_path, 3600);

  // PDF-Parser
  let document_text;
  if (fileURL?.signedUrl) {
    const response = await fetch(fileURL.signedUrl);
    const arrayBuffer = await response.arrayBuffer();
    document_text = await pdf(arrayBuffer).then((data) => {
      return data.text;
    });
  }

  if (!fileURL) {
    return {
      redirect: {
        permanent: false,
        destination: "/summarize",
      },
    };
  }

  return {
    props: {
      document_text,
      chatData,
      bookmarkData,
      fileURL,
      document_id,
    },
  };
}
