import React from "react";
import { CountryContentContainer, CountryInfo } from "./CountryContentParts";

const CountryContent = ({ countryData: { properties, content } }) => {
  return (
    <CountryContentContainer>
      {Array.isArray(properties) ? (
        <CountryInfo>
          {properties.find(({ key }) => key === "population") && (
            <>
              <span>
                Population:{" "}
                {properties.find(({ key }) => key === "population").value}
              </span>
              <br />
            </>
          )}
          {properties.find(({ key }) => key === "area") && (
            <span>
              Area: {properties.find(({ key }) => key === "area").value}
            </span>
          )}
        </CountryInfo>
      ) : null}
      <p dangerouslySetInnerHTML={{ __html: content?.sections[0]?.body }}></p>
    </CountryContentContainer>
  );
};

export default CountryContent;
