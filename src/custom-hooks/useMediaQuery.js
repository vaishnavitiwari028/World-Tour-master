import { useEffect, useState } from "react";

const useMediaQuery = (queryString) => {
  let [match, setMatch] = useState(window.matchMedia(queryString).matches);
  useEffect(() => {
    const changeMatch = () => {
      setMatch(window.matchMedia(queryString).matches);
    };
    const media = window.matchMedia(queryString);
    media.addEventListener("change", changeMatch);
    return () => {
      media.removeEventListener("change", changeMatch);
    };
  }, [queryString]);

  return match;
};

export default useMediaQuery;
