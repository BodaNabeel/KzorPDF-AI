import Summarize from "@/components/summarize/Summarize";
import { DataContext } from "@/context/context";
import { useContext, useEffect } from "react";
import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
export default function SummarizePage({ document_text }) {
  const { document, setDocument } = useContext(DataContext);
  useEffect(() => {
    setDocument(document_text);
  }, []);

  return (
    <section className=" h-screen   mx-auto ">
      <Summarize />
    </section>
  );
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "public", "research.pdf");
  const dataBuffer = fs.readFileSync(filePath);
  const document_text = await pdf(dataBuffer).then((data) => {
    return data.text;
  });
  return { props: { document_text } };
}
