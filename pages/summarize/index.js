import Summarize from "@/components/summarize/Summarize";
import { DataContext } from "@/context/context";
import { useContext, useEffect } from "react";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import NavbarLayout from "@/layout/NavbarLayout";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/dist/server/api-utils";
import supabase from "@/config/supabaseClient";

export default function SummarizePage({ document_text }) {
  const { setDocumentData } = useContext(DataContext);
  const fetchData = async () => {
    const { data, error } = await supabase.from("demo").select("doc_data");
    console.log(data);
  };
  fetchData();
  const temporaryID = "abc";
  useEffect(() => {
    if (document_text) {
      const documentInformation = [
        {
          [temporaryID]: {
            document_text,
            chat: [],
            notes: [],
          },
        },
      ];
      setDocumentData(documentInformation);
    }
  }, []);

  return (
    <NavbarLayout>
      <Summarize />
    </NavbarLayout>
  );
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "public", "final_report.pdf");
  const dataBuffer = fs.readFileSync(filePath);
  const document_text = await pdf(dataBuffer).then((data) => {
    return data.text;
  });
  return { props: { document_text } };
}
