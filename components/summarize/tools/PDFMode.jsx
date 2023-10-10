import { DataContext } from "../../../context/context";
import { IconChevronDown } from "@tabler/icons-react";
import React, { useContext, useEffect, useRef, useState } from "react";

function PDFMode() {
  const { overlay, setOverlay } = useContext(DataContext);
  const [modeType, setModeType] = useState(0);
  const [pagesPopup, setPagesPopup] = useState(false);
  const pdfModeTypes = ["Entire PDF", "Summarize", "Critical Points", "Misc"];
  const menuRef = useRef();

  useEffect(() => {
    if (!overlay) setPagesPopup(false);
  }, [overlay]);
  return (
    <div>
      <button
        className={`border-[1px] py-1  border-gray-300 rounded-md  flex  justify-between px-2 gap-5
        bg-primary-50 text-primary-700 font-medium
            `}
        onClick={() => {
          setPagesPopup(true);
          setOverlay("bg-transparent");
        }}
      >
        <p className="text-sm md:text-base">{pdfModeTypes[modeType]}</p>
        <IconChevronDown className="self-center" size={18} />
      </button>
      <div
        ref={menuRef}
        className={`border-[1px] py-1  border-gray-300 rounded-md  flex flex-col   justify-between  gap-3      ${
          pagesPopup && typeof overlay === "string"
            ? " bg-white absolute border-[1px] mt-1 z-50 "
            : "hidden"
        }   `}
      >
        {pdfModeTypes.map((element, index) => {
          return (
            <button
              className="hover:bg-gray-100 px-4 py-1"
              onClick={() => {
                setModeType(index);
                setPagesPopup(false);
                setOverlay(false);
              }}
              key={index}
            >
              {element}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PDFMode;
