import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [documentData, setDocumentData] = useState([]);
  return (
    <DataContext.Provider
      value={{
        overlay,
        setOverlay,
        documentData,
        setDocumentData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
