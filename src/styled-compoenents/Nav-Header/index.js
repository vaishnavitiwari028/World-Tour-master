import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as TitleLogo } from "../../assets/vectorpaint.svg";
import { SearchBar } from "../../styled-compoenents";
import {
  NavContainer,
  NavHeaderContainer,
  NavListItem,
  NavTitle,
} from "./NavHeaderParts";

const NavHeader = () => {
  const { pathname } = useLocation();
  return (
    <>
      <NavTitle>
        <TitleLogo />
      </NavTitle>
      <NavHeaderContainer>
        {pathname === "/" ? null : (
          <NavContainer>
            <div>
              <NavListItem>
                <label htmlFor="nav-search">
                  <i size="2.5rem" className="fas fa-search"></i>
                  <span>Search</span>
                </label>
              </NavListItem>
              <SearchBar partOf="nav" />
            </div>
            <NavListItem>
              <Link to="/">Home</Link>
            </NavListItem>
          </NavContainer>
        )}
      </NavHeaderContainer>
    </>
  );
};

export default memo(NavHeader);
