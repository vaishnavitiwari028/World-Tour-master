import styled from "styled-components";

const PlaceDetailsContainer = styled.div`
  margin: 5rem auto;
  height: max-content;
`;
const DescriptionContainer = styled.div`
  width: 65vw;
  height: 70vh;
  margin: auto;
  margin-bottom: 15rem;
  padding: 1rem;
  padding-top: 3rem;
  margin-left: 6%;
  position: relative;
  img {
    width: 100%;
    max-width: 80vw;
    height: 100%;
    max-height: 90vh;
    object-fit: ${({ isBgImg }) => (isBgImg ? "cover" : "contain")};
  }
  @media (max-width: 580px) {
    width: 100%;
    height: max-content;
    margin-left: 0;
  }
`;
const DescriptionHeaderContainer = styled.div`
  margin-left: 5%;
  margin-bottom: 0.5em;
  i {
    color: red;
    cursor: pointer;
    transition: 0.1s ease-in-out transform;
    transform: scale(0.9);
    :hover {
      transform: none;
    }
  }
`;
const DescriptionText = styled.p`
  position: absolute;
  top: 15%;
  width: 80%;
  margin-left: 60%;
  margin-right: 1rem;
  padding: 2em 1em;
  color: white;
  font-size: 2rem;
  background: linear-gradient(
    to right,
    rgba(0, 0, 50.2, 0.5),
    rgba(0, 0, 50.2, 1)
  );

  @media (max-width: 580px) {
    position: static;
    margin-left: auto;
    margin-right: auto;
  }
`;

export {
  PlaceDetailsContainer,
  DescriptionContainer,
  DescriptionText,
  DescriptionHeaderContainer,
};
