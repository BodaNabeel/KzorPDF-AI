import Summarize from "../../components/summarize/Summarize";
import { DataContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import NavbarLayout from "../../layout/NavbarLayout";
import {
  SupabaseClient,
  createPagesServerClient,
} from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function SummarizePage({
  document_text,
  chatData,
  bookmarkData,
}) {
  const { setDocumentData, setChatData, setBookmark } = useContext(DataContext);
  const [pdfLink, setPdfLink] = useState();
  // async function uploadDoc() {
  //   const { data, error } = await supabase.storage
  //     .from("files")
  //     .upload("document69.pdf", "/final_report.pdf", {
  //       cacheControl: "3600",
  //       upsert: false,
  //     });
  //   console.log(data);
  //   console.log(error);
  // }
  // useEffect(() => {
  //   uploadDoc();
  // }, []);
  const supabaseClient = useSupabaseClient();
  const uploadFile = async (event) => {
    const file = event.target.files[0];
    const bucket = "files";

    // Call Storage API to upload file
    const { data, error } = await supabaseClient.storage
      .from(bucket)
      // .upload(file.name, file);
      .upload(`public/${file.name}`, file);

    // Handle error if upload failed
    if (error) {
      // alert("Error uploading file.");
      console.log(error);
      return;
    }

    alert("File uploaded successfully!");
  };
  const getFile = async () => {
    const publicUrl = supabaseClient.storage
      .from("files/public")
      .getPublicUrl("nabeel_resume.pdf");
    console.log(publicUrl);
    setPdfLink(publicUrl.data.publicUrl);
  };
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
      <div>
        <h1>Upload Profile Photo</h1>
        <input type="file" onChange={uploadFile} />
      </div>
      <button onClick={getFile}>get file</button>
      <object data={pdfLink} type="application/pdf" width="100%" height="100%">
        <p>
          Alternative text - include a link <a href={pdfLink}>to the PDF!</a>
        </p>
      </object>
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

  // Storage

  // const file = "final_report.pdf";

  // const { data, error } = await supabase.storage
  //   .from("files")
  //   .upload("public/document69.pdf", filePath);
  // console.log(data);
  // console.log(error);

  return { props: { document_text, chatData, bookmarkData } };
}
