import React from "react";
import styled from "styled-components";
import { useSearch } from "../../custom-hooks";
import { Input, SuggestionsBar } from "../../styled-compoenents";
const SearchBarContainer = styled.div`
  width: ${({ partOf }) => (partOf === "nav" ? "150px" : "100%")};
  position: relative;
  transform: ${({ partOf }) =>
    partOf === "nav" ? "translateX(-50%)" : "none"};
  margin-top: ${({ partOf }) => (partOf === "nav" ? "-3rem" : "")};
  z-index: 2000;
  margin-right: 1em;
`;
const SearchBar = ({ partOf }) => {
  const {
    results,
    onChange,
    debouncedTerm,
    term,
    clearInput,
    goToSearchPage,
    goToRespectivePage,
  } = useSearch();
  return (
    <SearchBarContainer partOf={partOf}>
      <Input
        autoComplete="off"
        onChange={onChange}
        onSubmit={goToSearchPage}
        placeholder={partOf === "nav" ? "" : "Where Do You Want To Go"}
        button={debouncedTerm ? true : ""}
        partOf={partOf}
      />
      {term ? (
        <SuggestionsBar
          searchTerm={debouncedTerm}
          onOutsideClick={clearInput}
          results={results}
          partOf={partOf}
          goToRespectivePage={goToRespectivePage}
        />
      ) : null}
    </SearchBarContainer>
  );
};

export default SearchBar;
