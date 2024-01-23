import React, { useContext, useEffect, useState } from "react";
import Import from "./Import";
import Recent from "./Recent";
import ImportFile from "../import/ImportFile";
import { DataContext } from "../../context/context";
import { fetchFolderData } from "../../utils/apiUtils";

function HomePage({ folderData }) {
  const { overlay } = useContext(DataContext);
  const [selectedFolder, setSelectedFolder] = useState(
    folderData?.folderData[0]?.folder_id
  );
  return (
    <main className="min-h-screen">
      {overlay ? (
        <ImportFile
          folderData={folderData}
          setSelectedFolder={setSelectedFolder}
          selectedFolder={selectedFolder}
        />
      ) : null}
      <div className="mb-5">
        <h1 className="font-bold text-lg">Welcome, Nabeel</h1>
      </div>
      <Import />
    </main>
  );
}

export default HomePage;
