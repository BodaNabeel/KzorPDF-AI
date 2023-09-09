import React from "react";
import PageSelector from "./tools/PageSelector";
import PDFMode from "./tools/PDFMode";
export default function PDFSection() {
  return (
    <div className=" h-96 mb-5 lg:h-full lg:w-[50%] border-r-4 lg:border-gray-600 ">
      <div className="  flex justify-between px-2 py-2 h-[5%] items-center">
        <PageSelector />
        <PDFMode />
        <button>Download PDF</button>
      </div>
      <div className="h-[95%] overflow-y-auto">
        <object
          data="/final_report.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Alternative text - include a link{" "}
            <a href="/final_report.pdf">to the PDF!</a>
          </p>
        </object>
      </div>
    </div>
  );
}
