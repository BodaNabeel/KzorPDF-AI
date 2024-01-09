import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [documentData, setDocumentData] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [folders, setFolders] = useState([]);
  const [documents, setDocuments] = useState([]);
  return (
    <DataContext.Provider
      value={{
        overlay,
        setOverlay,
        documentData,
        setDocumentData,
        chatData,
        setChatData,
        bookmark,
        setBookmark,
        folders,
        setFolders,
        documents,
        setDocuments,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
