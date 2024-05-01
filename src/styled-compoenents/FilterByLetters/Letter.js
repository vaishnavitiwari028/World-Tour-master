import styled from "styled-components";

export const Letter = styled.span`
  color: ${({ color }) => (color ? "red" : undefined)};
  margin: ${({ last }) => (last ? "1em" : "0.3em")};
  cursor: ${({ color }) => (color ? "auto" : "pointer")};
  transition: 0.2s ease opacity;
  :hover {
    opacity: ${({ color }) => (color ? "1" : "0.6")};
  }
`;
