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

  const supabaseClient = useSupabaseClient();
  function processString(inputString) {
    // Convert to lowercase
    let lowercaseString = inputString.toLowerCase();

    // Replace spaces with underscores
    let stringWithUnderscores = lowercaseString.replace(/ /g, "_");

    // Remove special characters using a regular expression
    let stringWithoutSpecialChars = stringWithUnderscores.replace(
      /[^a-z0-9_.]/g,
      ""
    );

    return stringWithoutSpecialChars;
  }
  const uploadFile = async (event) => {
    const file = event.target.files[0];
    const fileName = processString(file.name);
    const bucket = "files";
    const {
      data: { user },
    } = await supabaseClient.auth.getUser();
    const timestamp = Date.now();

    const uniqueFilename = `${user.id}_${timestamp}_${fileName}`;

    // Call Storage API to upload file
    const { data, error } = await supabaseClient.storage
      .from(bucket)
      .upload(`public/${uniqueFilename}`, file);

    if (data) {
      const { error } = await supabaseClient
        .from("document")
        .insert({ document_name: "Lecture 01", document_path: uniqueFilename });
      console.log(error);
      alert("File uploaded successfully!");
    }
    if (error) console.log(error);
  };
  const getFile = async () => {
    const { data, error } = await supabaseClient.from("document").select();

    // console.log(user);
    if (data) {
      const publicUrl = supabaseClient.storage
        .from("files/public")
        .getPublicUrl(data[6].document_path);

      setPdfLink(publicUrl.data.publicUrl);
    }
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
