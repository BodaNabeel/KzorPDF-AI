import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [documentData, setDocumentData] = useState([]);
  const [chatData, setChatData] = useState([]);
  return (
    <DataContext.Provider
      value={{
        overlay,
        setOverlay,
        documentData,
        setDocumentData,
        chatData,
        setChatData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
