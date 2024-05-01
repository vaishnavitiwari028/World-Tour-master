import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkedButton = styled(Link)`
  padding: 0.6em;
  font-size: ${({ size }) =>
    size === "lg"
      ? "3.5rem"
      : size === "md"
      ? "2.5rem"
      : size === "sm"
      ? "1.5rem"
      : "2rem"};
  text-align: center;
  font-weight: var(--font-bold);
  text-decoration: none;
  color: ${({ color }) => (color ? color : "var(--clr-secondary)")};
  border: 1px solid var(--clr-primary);
  border-radius: 0.2em;
  background-color: ${({ bgc }) => (bgc ? `var(${bgc})` : "white")};
  :hover {
    background-color: ${({ bgc }) =>
      bgc ? `rgba(var(${bgc}-rgb), 0.8)` : "var(--clr-bg)"};
  }
  width: ${({ width }) => (width ? width : "auto")};
  margin: ${({ margin }) => (margin ? margin : "1rem 0")};
  display: block;
`;
export default LinkedButton;
