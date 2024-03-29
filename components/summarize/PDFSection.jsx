import React from "react";
import PageSelector from "./tools/PageSelector";
import PDFMode from "./tools/PDFMode";
import { IconDownload } from "@tabler/icons-react";
export default function PDFSection({ fileURL }) {
  return (
    <div className=" h-96 mb-5 lg:h-full lg:w-[50%] border-r-4 lg:border-gray-600 ">
      {/* <div className="  flex justify-between px-2 py-2 h-[10%] lg:h-[5%] items-center">
        <PageSelector />
        <PDFMode />
        <button className="flex text-sm md:text-base   text-accent-400 border-[2px] border-accent-400  font-medium px-2 py-1 rounded-md">
          <IconDownload className="h-5 md:h-full" />
          <p>Download</p>
        </button>
      </div> */}
      <div className="h-full overflow-y-auto">
        <object
          data={fileURL.signedUrl}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Alternative text - include a link{" "}
            <a href={fileURL.signedUrl}>to the PDF!</a>
          </p>
        </object>
      </div>
    </div>
  );
}
