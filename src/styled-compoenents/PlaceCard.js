import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "./Wrapper";

const PlaceCardWrapper = styled(Wrapper)`
  flex-wrap: wrap;
`;

const PlaceCard = styled(Link)`
  height: 500px;
  position: relative;
  margin: 5rem 2rem;
  width: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px grey;

  @media (max-width: 400px) {
    width: 280px;
    height: 400px;
  }
`;
PlaceCard.TypeHeader = styled.div`
  margin: 0.5em;
`;
PlaceCard.SubHeader = styled.div`
  font-size: 2.5rem;
  font-weight: var(--font-bold);
  letter-spacing: 5px;
  text-align: center;
  width: 100%;
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  position: absolute;
  z-index: 10;
  color: ${({ color }) => (color ? color : "var(--clr-secondary)")};
`;
PlaceCard.Background = styled.div`
  width: 100%;
  height: ${({ bgHeight }) => (bgHeight ? bgHeight : "90%")};
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.85;
    transition: 0.1s ease opacity;
    :hover {
      opacity: 1;
    }
  }
`;
export { PlaceCardWrapper, PlaceCard };
