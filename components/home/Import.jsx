import React, { useContext } from "react";
import { IconUpload } from "@tabler/icons-react";
import { DataContext } from "../../context/context";
function Import() {
  const { setOverlay } = useContext(DataContext);

  return (
    <button
      onClick={() => setOverlay("bg-[#000000]")}
      className="flex bg-primary-700 px-4 py-2 rounded-md items-start text-white cursor-pointer justify-between w-32 shadow-[0px_6px_14px_-6px_#08235e] focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-700 transition-all transition-75"
    >
      {<IconUpload stroke={1.5} height={20} />}
      <p className="font-source_sans">IMPORT</p>
    </button>
  );
}

export default Import;
