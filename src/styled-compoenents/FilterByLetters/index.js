import styled from "styled-components";
import { useMediaQuery } from "../../custom-hooks";
import { Letter } from "./Letter";
const LETTERS = (() => {
  let arr = [];
  for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
})();

const LettersContainer = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const FilterByLetter = ({ letter, setLetter }) => {
  let match = useMediaQuery("(max-width: 800px)");
  return (
    <LettersContainer>
      {match ? "" : "filter by letters-"}
      {LETTERS.map((ltr, index) => (
        <Letter
          key={`filter_by_letter-${index}`}
          color={letter === ltr && "red"}
          onClick={() => {
            setLetter(ltr);
          }}
        >
          {ltr}
        </Letter>
      ))}
      |
      <Letter
        last
        color={!letter && "red"}
        onClick={() => {
          setLetter("");
        }}
      >
        all
      </Letter>
    </LettersContainer>
  );
};

export default FilterByLetter;
