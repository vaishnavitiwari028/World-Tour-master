import { useEffect, useState } from "react";
import styled from "styled-components";
import GoToTop from "./GoToTop";
const StyledScrollIndicator = styled.div.attrs(({ progress }) => ({
  style: {
    transform: `scaleX(${progress})`,
  },
}))`
  position: fixed;
  height: 5px;
  background-color: blue;
  width: 100%;
  top: 0;
  transform-origin: left;
  z-index: 1000;
`;
const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const proggressOnScroll = () => {
      if (window.scrollY === 0) {
        setScrollProgress(0);
        return;
      }
      requestAnimationFrame(() => {
        let scrolled = window.innerHeight + window.scrollY;
        setScrollProgress(scrolled / document.body.offsetHeight);
      });
    };
    document.addEventListener("scroll", proggressOnScroll, {
      capture: false,
      passive: true,
    });
    return () => {
      document.removeEventListener("scroll", proggressOnScroll);
    };
  }, []);
  return (
    <div>
      <StyledScrollIndicator progress={scrollProgress} />
      {scrollProgress > 0.3 ? <GoToTop /> : null}
    </div>
  );
};

export default ScrollIndicator;
