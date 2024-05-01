import styled from "styled-components";
import LinkedCard from "../LinkedCard";
import Wrapper from "../Wrapper";

const CountryCardsContainer = styled(Wrapper)`
  flex-wrap: wrap;
`;

const CountryCard = styled(LinkedCard)`
  font-size: 3rem;
  height: 250px;
  color: var(--clr-secondary);
  background-color: white;
  margin: 3rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 5px 5px 10px grey;
`;
CountryCard.Wrapper = styled(Wrapper)`
  flex-direction: "column";
`;

CountryCard.SubHeader = styled.span`
  font-size: 2rem;
`;
CountryCard.Icon = styled.div`
  width: 100px;
  height: 70px;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export { CountryCardsContainer, CountryCard };
