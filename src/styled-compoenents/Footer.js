import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--clr-lightblue);
  color: white;
  bottom: 0;
  margin-top: 100px;
  padding: 1em;
  text-align: center;
  position: absolute;
  width: 100%;
`;

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        &#169; Designed And Created By Vaishnavi Tiwari
      </FooterContainer>
    </div>
  );
};

export default Footer;
