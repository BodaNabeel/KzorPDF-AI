import React, { useRef, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
function PageSelector() {
  const [pagesPopup, setPagesPopup] = useState(false);
  const [startPage, setStartPage] = useState();
  const [endPage, setEndPage] = useState();
  const startPageRef = useRef();
  const endPageRef = useRef();
  function setPageRange() {
    setStartPage(startPageRef.current.value);
    setEndPage(endPageRef.current.value);
    setPagesPopup(false);
  }
  function DisplayPageRange() {
    return (
      <p className="font-medium">
        {startPage} - {endPage}
      </p>
    );
  }
  return (
    <div>
      <button
        className={`border-[1px] py-1  border-gray-300 rounded-md  flex  justify-between px-2 gap-5
            ${
              startPage && endPage
                ? "bg-primary-50 text-primary-700"
                : "hover:bg-gray-100"
            }
            `}
        onClick={() => setPagesPopup(!pagesPopup)}
      >
        {startPage && endPage ? <DisplayPageRange /> : <p>All Pages</p>}
        <IconChevronDown className="self-center" size={18} />
      </button>
      <div
        className={`${
          pagesPopup ? " bg-white absolute border-[1px] mt-1 " : "hidden"
        } px-2 py-4  flex flex-col`}
      >
        <h1 className="font-semibold"> Choose pages:</h1>
        <div className="flex w-full items-center gap-1 mt-4 mb-4 ">
          <input
            className="w-[40%] border-[1px] rounded-md border-gray-300 outline-primary-200 px-2 py-2

                 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            ref={startPageRef}
          />
          <p>to</p>
          <input
            className="w-[40%]  border-[1px] rounded-md border-gray-300 outline-primary-200 px-2 py-2


                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            ref={endPageRef}
          />
        </div>

        <div className="self-end flex gap-2 ">
          <button
            className="bg-s_grey-100 text-s_grey-600 px-4 py-2 rounded-md"
            onClick={() => setPagesPopup(false)}
          >
            Cancel
          </button>
          <button
            className="bg-primary-800 text-primary-100 px-4 py-2 rounded-md"
            onClick={setPageRange}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageSelector;
