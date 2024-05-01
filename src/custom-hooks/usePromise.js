import { useEffect, useState } from "react";

const usePromise = (asyncFuncton, watchList = []) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    refresh();
  }, watchList);

  const refresh = async () => {
    reset();
    try {
      setLoading(true);
      const res = await asyncFuncton();
      if (res) {
        setLoading(false);
        setResponse(res);
      }
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };
  const reset = () => {
    setLoading(false);
    setResponse(null);
    setError(null);
  };

  return { loading, response, error, reset, refresh };
};

export default usePromise;
