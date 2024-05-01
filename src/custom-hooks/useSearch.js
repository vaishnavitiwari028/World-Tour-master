import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { searchPlace } from "../api/axios";
import { useDebounce, usePromise } from "./index";

const useSearch = () => {
  const [term, setTerm] = useState();
  const [debouncedTerm, setDebouncedTerm] = useDebounce(term, 300);
  const { q: query } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    return clearInput();
  }, [pathname]);

  useEffect(() => {});
  const { response, reset } = usePromise(
    () => debouncedTerm && searchPlace(debouncedTerm),
    [debouncedTerm]
  );

  const results = response?.data?.results.filter(
    (suggestion) => suggestion.type === "city" || suggestion.type === "country"
  );

  const clearInput = () => {
    setTerm("");
    setDebouncedTerm("");
    reset();
  };

  const onChange = (e) => {
    setTerm(e.target.value);
  };

  const goToSearchPage = () => {
    if (typeof term === "string" && !term.trim()) return;
    if (typeof debouncedTerm === "string" && !debouncedTerm.trim()) return;

    history.push(`/search?q=${debouncedTerm.trim()}`, { q: results });
  };
  const goToRespectivePage = ({ type, country_id, id }) => {
    let path =
      type === "city"
        ? `/region/${country_id.replaceAll(" ", "_")}/cities/${id.replaceAll(
            " ",
            "_"
          )}`
        : `/region/${id.replaceAll(" ", "_")}`;
    history.push(path);
  };

  return {
    query,
    results,
    onChange,
    debouncedTerm,
    clearInput,
    goToSearchPage,
    goToRespectivePage,
    term,
  };
};

export default useSearch;
