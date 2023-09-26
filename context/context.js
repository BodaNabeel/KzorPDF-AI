import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [document, setDocument] = useState(null);
  const [notes, setNotes] = useState([]);
  return (
    <DataContext.Provider
      value={{
        overlay,
        setOverlay,
        document,
        setDocument,
        notes,
        setNotes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
