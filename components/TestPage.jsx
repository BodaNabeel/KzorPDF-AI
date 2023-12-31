import { DataContext } from "../../context/context";
import { Document } from "langchain/document";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { useContext, useEffect } from "react";

export default function TestPage() {
  const { documentData, setDocumentData } = useContext(DataContext);

  const fetch = async () => {
    const template = `Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say that you don't know, don't try to make up an answer.
{context}
Question: {question}`;
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: "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",
      organization: "org-hh5FPQuboN5I0OCgXrVTHSu5",
      model: "text-embedding-ada-002",
    });
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 800,
      chunkOverlap: 200,
      separators: "\n",
    });
    const splitDocs = await textSplitter.splitDocuments([
      new Document({
        pageContent: `Capitalism: is an economic system based on the private ownership of the means of production and `,
        // pageContent: documentData[0].abc.document_text,
      }),
    ]);
    const vectorStore = await MemoryVectorStore.fromDocuments(
      splitDocs,
      embeddings
    );
    const model = new ChatOpenAI({
      openAIApiKey: "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",
      modelName: "gpt-3.5-turbo",
    });
    const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
      prompt: PromptTemplate.fromTemplate(template),
    });
    const response = await chain.call({
      query: "In length explain the ideas shared in this document?",
    });
  };
  useEffect(() => {
    fetch();
  }, []);

  return <h1>Test Route</h1>;
}
