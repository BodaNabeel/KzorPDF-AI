import { IconFileInvoice } from "@tabler/icons-react";
import { IconFile, IconFileFilled, IconUpload } from "@tabler/icons-react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone({ file, setFile }) {
  const onDrop = useCallback((acceptedFile) => {
    setFile(acceptedFile[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-200 transition-all transition-75"
      {...getRootProps()}
    >
      <input className="" {...getInputProps()} />
      {file ? (
        <>
          <div className="hidden lg:block">
            <IconFileInvoice size={120} stroke={0.5} color="grey" />
          </div>
          <p className="text-s_grey-400 lg:font-semibold font-medium lg:text-lg">
            {file.name}
          </p>
        </>
      ) : (
        <>
          <div className="hidden lg:block">
            <IconUpload size={120} stroke={0.5} color="grey" />
          </div>
          <div className="lg:block hidden">
            <p className="font-semibold text-lg">Drag and drop your file</p>
            <p className="text-base font-medium text-s_grey-500 text-center">
              or click to <span className="text-primary-600">browse</span> files
            </p>
          </div>
          <div className="lg:hidden block">
            <p className="font-medium">
              Click to <span className="text-primary-600">browse</span> file
            </p>
          </div>
        </>
      )}
    </div>
  );
}
