import React, { useContext, useEffect, useRef, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { DataContext } from "../../../context/context";
function PageSelector() {
  const { overlay, setOverlay } = useContext(DataContext);
  const [pagesPopup, setPagesPopup] = useState(false);
  const [error, setError] = useState(false);
  const [startPage, setStartPage] = useState();
  const [endPage, setEndPage] = useState();
  const startPageRef = useRef();
  const endPageRef = useRef();

  const errorInformation = {
    0: "The starting page must be greater than zero",
    1: "The starting page cannot be greater than the ending page.",
  };
  function resetState() {
    setPagesPopup(false);
    setOverlay(false);
    setError(false);
    startPageRef.current.value = "";
    endPageRef.current.value = "";
  }
  useEffect(() => {
    if (!overlay) {
      setPagesPopup(false);
      resetState();
    }
  }, [overlay]);

  function submitPageRange() {
    if (Number(startPageRef.current.value) <= 0) {
      setError(errorInformation[0]);
    } else if (
      Number(startPageRef.current.value) > Number(endPageRef.current.value)
    ) {
      setError(errorInformation[1]);
    } else {
      setStartPage(startPageRef.current.value);
      setEndPage(endPageRef.current.value);
      resetState();
    }
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
        onClick={() => {
          setPagesPopup(true);
          setOverlay("bg-transparent");
        }}
      >
        {startPage && endPage ? <DisplayPageRange /> : <p>All Pages</p>}
        <IconChevronDown className="self-center" size={18} />
      </button>
      <div
        className={`${
          pagesPopup && typeof overlay === "string"
            ? " bg-white absolute border-[1px] mt-1 z-50"
            : "hidden"
        } px-2 py-4  flex flex-col`}
      >
        <h1 className="font-semibold"> Choose pages:</h1>
        <div className="flex w-full items-center gap-1 mt-4 mb-4 ">
          <input
            className="w-[40%] border-[1px] rounded-md border-gray-300 outline-primary-200 px-2 py-2

                 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            ref={startPageRef}
            min={1}
          />
          <p>to</p>
          <input
            className="w-[40%]  border-[1px] rounded-md border-gray-300 outline-primary-200 px-2 py-2


                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            ref={endPageRef}
            min={1}
          />
        </div>
        {error ? (
          <p className=" text-sm  mb-4 bg-s_red-100 text-s_red-700 p-2  rounded-md w-max">
            {error}
          </p>
        ) : null}
        <div className="self-end flex gap-2 ">
          <button
            className="bg-s_grey-100 text-s_grey-600 px-4 py-2 rounded-md"
            onClick={resetState}
          >
            Cancel
          </button>
          <button
            className="bg-primary-800 text-primary-100 px-4 py-2 rounded-md"
            onClick={submitPageRange}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageSelector;
