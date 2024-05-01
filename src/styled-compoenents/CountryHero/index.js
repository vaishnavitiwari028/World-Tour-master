import React from "react";
import { Header, HeroImage, LinkedButton } from "../../styled-compoenents";
import { CountryInner } from "./CountryHeroParts";

const CountryHero = ({
  imgSrc,
  pathname,
  modifiedCountryName,
  countryData: { name, id, snippet, score },
}) => {
  return (
    <HeroImage imgSrc={imgSrc}>
      <HeroImage.Content>
        <CountryInner key={id}>
          <Header color="white">{name}</Header>
          <h3>
            <i style={{ color: "gold" }} className="fas fa-star"></i>
            {score.toFixed(1)}
          </h3>
          <p>{snippet}</p>
          <LinkedButton
            width="max-content"
            to={`${modifiedCountryName(pathname)}/${id}/cities`}
          >
            Top Cities In {name}
          </LinkedButton>
        </CountryInner>
      </HeroImage.Content>
    </HeroImage>
  );
};

export default CountryHero;
