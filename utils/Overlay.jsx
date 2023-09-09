import React, { useContext } from "react";
import { DataContext } from "../context/context";
function Overlay() {
  const { overlay, setOverlay } = useContext(DataContext);
  console.log(`bg-[${overlay}]`);
  return (
    <div
      onClick={() => setOverlay(false)}
      className={`h-full w-full ${overlay}  z-40 ${
        typeof overlay === "string" ? "absolute" : "hidden"
      }`}
    ></div>
  );
}

export default Overlay;
