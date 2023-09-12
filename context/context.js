import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <DataContext.Provider value={{ overlay, setOverlay }}>
      {children}
    </DataContext.Provider>
  );
};
