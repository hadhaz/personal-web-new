import { useState, useEffect } from "react";

function useWidthSize() {
  const [widthSize, setWindowSize] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return widthSize;
}

export default useWidthSize;
