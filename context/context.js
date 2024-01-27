import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [documentData, setDocumentData] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [folders, setFolders] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [documentCount, setDocumentCount] = useState();
  const [chatCount, setChatCount] = useState();
  const [bookmarkCount, setBookmarkCount] = useState();
  const [collectionCount, setCollectionCount] = useState();
  const [recentDocuments, setRecentDocuments] = useState([]);
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
        documentCount,
        setDocumentCount,
        chatCount,
        setChatCount,
        bookmarkCount,
        setBookmarkCount,
        collectionCount,
        setCollectionCount,
        recentDocuments,
        setRecentDocuments,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
