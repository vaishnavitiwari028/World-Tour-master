import styled from "styled-components";
import { useClickOutside } from "../custom-hooks";
const SuggestionsBarWrapper = styled.div`
  font-size: ${({ fz }) => (fz ? fz : "2.5rem")};
  border-radius: 5px;
  background-color: white;
  padding-top: 1rem;
  transform: ${({ active }) =>
    active ? `scaleY(1) translateY(-7px)` : `scaleY(0) translateY(-7px)`};
  width: ${({ partOf }) => (partOf === "nav" ? "200px" : "calc(100% - 2rem)")};
  transform-origin: top;
  transition: ${({ partOf }) =>
    partOf === "nav" ? "" : "0.2s ease transform"};
  position: absolute;
  z-index: 2000;
  margin-left: 2rem;
`;
const SuggestionItem = styled.div`
  cursor: pointer;
  box-sizing: padding-box;
  font-size: 2rem;
  border-radius: 5px;
  padding: 0.3em 2rem;
  background-color: white;
  margin-top: -6px;
  :hover {
    background-color: lightcyan;
  }
`;
const SuggestionsBar = ({
  results,
  onOutsideClick,
  partOf,
  goToRespectivePage,
}) => {
  const { elRef } = useClickOutside({
    callback: onOutsideClick,
  });

  return (
    <SuggestionsBarWrapper active={results?.length} partOf={partOf} ref={elRef}>
      {results?.map(({ id, name, type, country_id }, index) => (
        <SuggestionItem
          key={`suggetions-${index}`}
          onClick={() => goToRespectivePage({ id, type, country_id })}
        >
          {name}
          {type === "city" ? ", " + country_id.replaceAll("_", " ") : ""}
        </SuggestionItem>
      ))}
    </SuggestionsBarWrapper>
  );
};
export default SuggestionsBar;
