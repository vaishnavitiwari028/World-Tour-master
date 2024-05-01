import { useEffect } from "react";

const useStartFromTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useStartFromTop;
