import React from "react";
import { ClipLoader } from "react-spinners";

function SubmitButton({
  allowUpload,
  isUploading,
  buttonText,
  functionSubmit,
}) {
  return (
    <button
      type="submit"
      onClick={allowUpload ? functionSubmit : null}
      className={` flex gap-2 items-center px-4 py-2 rounded-md transition-all duration-300 ${
        allowUpload && !isUploading
          ? "bg-primary-800 text-primary-100  "
          : "bg-s_grey-100 text-s_grey-600 cursor-not-allowed"
      }`}
    >
      {isUploading ? <ClipLoader size={20} color="hsl(221,84%,70%)" /> : null}
      {buttonText}
    </button>
  );
}

export default SubmitButton;
