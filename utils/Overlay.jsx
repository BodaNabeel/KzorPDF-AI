import React, { useContext } from "react";
import { DataContext } from "../context/context";
function Overlay() {
  const { overlay, setOverlay } = useContext(DataContext);
  return (
    <div
      onClick={() => setOverlay(false)}
      className={`h-full w-full ${overlay}  z-50 ${
        typeof overlay === "string" ? "absolute" : "hidden"
      }`}
    ></div>
  );
}

export default Overlay;
