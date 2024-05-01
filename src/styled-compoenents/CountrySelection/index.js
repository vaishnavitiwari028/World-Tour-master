import React from "react";
import { Wrapper } from "../../styled-compoenents";
import { CountryCard, CountryCardsContainer } from "./CountryCard";
const CountrySelection = ({ countries, letter, region }) => {
  return (
    <CountryCardsContainer>
      {countries?.map(({ name, capital, flag }, index) => {
        if (letter && !name.startsWith(letter.toUpperCase())) return null;
        return (
          <Wrapper key={`country_selection-${index}`} direction="column">
            <CountryCard to={`${region}/${name.replaceAll(" ", "_")}`}>
              {name}
              <CountryCard.SubHeader>Capital: {capital}</CountryCard.SubHeader>
              <CountryCard.Icon>
                <img src={flag} alt="" />
              </CountryCard.Icon>
            </CountryCard>
          </Wrapper>
        );
      })}
    </CountryCardsContainer>
  );
};

export default CountrySelection;
