import Summarize from "@/components/summarize/Summarize";
import { DataContext } from "@/context/context";
import { useContext, useEffect } from "react";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import { v4 as uuidv4 } from "uuid";
export default function SummarizePage({ document_text }) {
  const { setDocumentData } = useContext(DataContext);

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
    <section className=" h-screen   mx-auto ">
      <Summarize />
    </section>
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
