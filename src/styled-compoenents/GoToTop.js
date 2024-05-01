import React from "react";
import styled from "styled-components";
const StyledGoToTop = styled.div`
  position: fixed;
  bottom: 0;
  right: 10px;
  cursor: pointer;
  z-index: 10000;
`;
const GoToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <StyledGoToTop onClick={scrollToTop}>
      <i style={{ color: "blue" }} className="fas fa-arrow-circle-up fa-2x"></i>
    </StyledGoToTop>
  );
};

export default GoToTop;
