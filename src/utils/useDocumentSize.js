import { useState, useLayoutEffect } from "react";
import debounce from "./debounce";

export default function useDocumentSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const updateSize = debounce(() => {
      setSize({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      });
    }, 100);
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
