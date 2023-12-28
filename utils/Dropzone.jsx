import { IconFileInvoice } from "@tabler/icons-react";
import { IconFile, IconFileFilled, IconUpload } from "@tabler/icons-react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone({ file, setFile }) {
  const onDrop = useCallback((acceptedFile) => {
    setFile(acceptedFile[0]);
    console.log(acceptedFile[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {file ? (
        <>
          <div>
            <IconFileInvoice size={120} stroke={0.5} color="grey" />
          </div>
          <p className="text-s_grey-400 font-semibold text-lg">{file.name}*</p>
        </>
      ) : (
        <>
          <div>
            <IconUpload size={120} stroke={0.5} color="grey" />
          </div>
          <div className="">
            <p className="font-semibold text-lg">Drag and drop your file</p>
            <p className="text-base font-medium text-s_grey-500 text-center">
              or click to <span className="text-primary-600">browser</span>{" "}
              files
            </p>
          </div>
        </>
      )}
    </div>
  );
}
