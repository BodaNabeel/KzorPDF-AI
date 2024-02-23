import { useState } from "react";
import { IconMessage, IconNotes } from "@tabler/icons-react";

export default function Header({
  children,
  selectedOption,
  setSelectedOption,
}) {
  return (
    <div className="lg:w-[50%]  lg:h-screen">
      <div className="flex gap-5 px-2 py-2 h-[5%]">
        <span
          onClick={() => setSelectedOption(0)}
          className={`flex gap-1 items-center cursor-pointer   ${
            selectedOption === 0
              ? "text-primary-700 underline underline-offset-4"
              : null
          }`}
        >
          <IconMessage height={20} />
          <h1>Chat</h1>
        </span>
        <span
          onClick={() => setSelectedOption(1)}
          className={`flex gap-1 items-center cursor-pointer  ${
            selectedOption === 1
              ? "text-primary-700 underline underline-offset-4"
              : null
          }`}
        >
          <IconNotes height={20} />
          <h1>Bookmarks</h1>
        </span>
      </div>
      <div className="h-[95%] ">{children}</div>
    </div>
  );
}
