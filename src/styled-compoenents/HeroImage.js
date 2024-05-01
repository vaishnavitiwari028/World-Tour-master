import React from "react";
import styled from "styled-components";

const HeroImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 150vh;
  margin-bottom: 10rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 80%;
  }
`;
const HeroImage = ({ imgSrc, alt, children, fixed }) =>(
    <HeroImageContainer
      style={{
        background: `fixed center / cover url("${imgSrc}"), linear-gradient(to right, #003973, #e5e5be), #1b8cfe`,
      }}
    >
      {children}
    </HeroImageContainer>
 );


HeroImage.Content = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : 0)};
  left: ${({ left }) => (left ? left : 0)};
`;
export default HeroImage;
