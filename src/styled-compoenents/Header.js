import styled from "styled-components";

const Header = styled.header`
  font-size: ${({ fz }) => (fz ? fz : "4.5rem")};
  color: ${({ color }) => (color ? color : "var(--clr-primary)")};
  margin-left: ${({ mt }) => (mt ? mt : "0")};
  text-shadow: ${({ hero }) => (hero ? "2px 3px 5px grey" : "")};
  span {
    font-size: 3rem;
    margin: 0 1em;
  }
  @media (min-width: 800px) {
    white-space: nowrap;
  }
`;

export default Header;
