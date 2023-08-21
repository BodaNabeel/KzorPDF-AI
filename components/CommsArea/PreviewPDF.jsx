import React from "react";

export default function PreviewPDF() {
  const initialZoom = 50;
  return (
    <div className=" min-h-[100%] lg:w-[50%] border-r-4 lg:border-gray-600 ">
      <div className="  flex justify-between px-2 py-2">
        <h1 className="font-semibold">Notes of OOPs for second semester </h1>
      </div>
      <div className="h-[95%] overflow-y-auto">
        <iframe
          className="w-[90%] h-[100%] mx-auto"
          id="pdf"
          src={`/final_report.pdf#zoom=${initialZoom}`}
        />
      </div>
    </div>
  );
}
