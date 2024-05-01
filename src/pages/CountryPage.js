import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCountryDetails, getImage } from "../api/axios";
import { useMediaQuery, usePromise } from "../custom-hooks";
import {
  CountryContent,
  FallBack,
  LinkedButton,
  Map,
  Wrapper,
} from "../styled-compoenents";
import CountryHero from "../styled-compoenents/CountryHero";

const CountryPage = () => {
  const { country } = useParams();
  const { pathname } = useLocation();
  const match = useMediaQuery("(max-width:650px)");
  const { loading: loadingData, response: responseData } = usePromise(
    () => getCountryDetails(country),
    [country]
  );

  const { response: responseImg } = usePromise(() =>
    getImage(country.replaceAll("_", " "))
  );

  if (loadingData) return <FallBack />;

  const modifiedCountryName = (country) => {
    return country.slice(0, country.lastIndexOf("/"));
  };

  const finalCountry = responseData?.data?.results
    .filter(
      (item, index) =>
        item.id === country ||
        item.name === country ||
        index === 0 ||
        item.name.includes(country)
    )
    .slice(-1);

  return finalCountry ? (
    <Wrapper direction="column">
      {finalCountry.map(
        ({ name, id, snippet, score, content, properties }, index) => (
          <div direction="column" key={`country_page-${index}`}>
            <CountryHero
              imgSrc={responseImg?.data?.hits[0].largeImageURL}
              countryData={{ name, id, snippet, score }}
              pathname={pathname}
              modifiedCountryName={modifiedCountryName}
            />
            <Map
              id="country-map"
              country={finalCountry}
              halfScreen={match ? false : true}
              center={finalCountry?.coordinates}
            />

            <CountryContent
              countryData={{ properties, content }}
              pathname={pathname}
              modifiedCountryName={modifiedCountryName}
            />
            <Wrapper justify="space-around" margin="2rem 0">
              <LinkedButton
                bgc="--clr-lightblue"
                color="white"
                width="50%"
                to={`${modifiedCountryName(pathname)}/${id}/cities`}
              >
                Top Cities In {name}
              </LinkedButton>
            </Wrapper>
          </div>
        )
      )}
    </Wrapper>
  ) : null;
};

export default CountryPage;
