import React, { useContext, useEffect, useState } from "react";
import Import from "./Import";
import Recent from "./Recent";
import ImportFile from "../import/ImportFile";
import { DataContext } from "../../context/context";
import { fetchFolderData } from "../../utils/apiUtils";

function HomePage() {
  const { overlay } = useContext(DataContext);
  const [folders, setFolders] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const folderDataFromAPI = await fetchFolderData();
      setFolders(folderDataFromAPI);
    };

    fetchData();
  }, []);
  return (
    <>
      {overlay ? <ImportFile folders={folders} /> : null}
      <div className="mb-5">
        <h1 className="font-bold text-lg">Welcome, Nabeel</h1>
      </div>
      <Import />
    </>
  );
}

export default HomePage;
