import styled from "styled-components";

export const NavHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 100vw;
  background-color: transparent;
  margin-top: 0.8rem;
  border-left: 5px solid rgba(0, 0, 185, 0.2);
  border-right: 5px solid rgba(0, 0, 185, 0.2);
  padding: 0.25em 1rem;
`;
export const NavTitle = styled.header`
  position: relative;
  color: var(--clr-primary);
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const NavListItem = styled.li`
  list-style-type: none;
  position: relative;
  transition: 0.2s ease opacity;
  :hover {
    opacity: 0.7;
  }

  label {
    box-sizing: border-box;
    cursor: pointer;
    span {
      padding-left: 1rem;
    }
  }
  input {
    opacity: 0;
    &:focus {
      opacity: 1;
    }
  }
`;
