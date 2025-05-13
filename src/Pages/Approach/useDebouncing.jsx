import { useEffect, useState } from "react";

function useDebouncing(value, delay) {
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounce;
}

export default useDebouncing;
