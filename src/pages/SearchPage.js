import React from "react";
import { useParams } from "react-router-dom";
import { searchPlace } from "../api/axios";
import { usePromise } from "../custom-hooks";
import { FallBack, Header, SearchResults } from "../styled-compoenents";

const SearchPage = () => {
  const { q: searchedPlace } = useParams();
  const { loading, response } = usePromise(() => searchPlace(searchedPlace), [
    searchedPlace,
  ]);

  const searchedData = response?.data?.results.filter(
    (suggestion) => suggestion.type === "city" || suggestion.type === "country"
  );

  if (loading) return <FallBack />;
  return (
    <>
      <Header mt="1rem" fz="3rem">
        showing results for "{searchedPlace}"{" "}
      </Header>
      <SearchResults data={searchedData} />
    </>
  );
};

export default SearchPage;
