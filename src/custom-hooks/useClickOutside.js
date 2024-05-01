import { useEffect, useRef, useCallback } from "react";

const useClickOutside = ({ callback = () => {} }) => {
  const elRef = useRef();
  const memoedCallback= useCallback(callback,[])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!elRef.current?.contains(e.target)) memoedCallback();
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [memoedCallback]);

  return elRef;
};

export default useClickOutside;
