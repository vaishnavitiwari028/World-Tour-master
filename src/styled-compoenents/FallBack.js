import React from "react";
import styled, { keyframes } from "styled-components";
import Wrapper from "./Wrapper";
const Arr = Array(20).fill("");

const animate = keyframes`
0%{
  transform:scale(0);
}
10%{
  transform:scale(1.2);
}
80%,100%{
  transform:scale(0);
}
`;
const rotating = keyframes`
0%{
  transform:rotate(10deg);
}
100%{
  transform:rotate(370deg);
}
`;

const SpinnerContainer = styled(Wrapper)`
  width: 100vw;
  height: 100vh;
  /* background-color: white; */
  background-color: var(--bg-clr);
`;
const SpinnerCirclesContainer = styled.div`
  position: relative;
  height: 12rem;
  width: 12rem;
`;
const SpinnerCircle = styled.span`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  transform: ${({ i }) => `rotate(${i * 18}deg)`};

  ::before {
    content: "";
    position: absolute;
    background-color: lightgrey;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    transform: scale(0);
    animation: ${animate} 2s linear infinite;
    animation-delay: ${({ i }) => `calc(${i} * 0.1s)`};
  }
`;
const Aeroplane = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation: ${rotating} 2s linear infinite;
  animation-delay: -0.6s;
  i {
    position: absolute;
    top: 110px;
    left: 40px;
    color: var(--clr-lightblue);
    transform: rotate(180deg);
  }
`;
const FallBack = () => {
  return (
    <SpinnerContainer>
      <SpinnerCirclesContainer>
        {Arr.map((item, i) => (
          <SpinnerCircle i={i} key={`fallback_${i}`} />
        ))}
        <Aeroplane>
          <i className="fas fa-plane fa-2x"></i>
        </Aeroplane>
      </SpinnerCirclesContainer>
    </SpinnerContainer>
  );
};

export default FallBack;
