import React from "react";
import { FallBack, PlaceCard, PlaceCardWrapper, Wrapper } from "..";
import { getImage } from "../../api/axios";
import noImage from "../../assets/no-image2.png";
import { usePromise } from "../../custom-hooks";

const SearchResults = ({ data }) => {
  const { loading: loadingImage, response: imgResponse } = usePromise(
    () => Promise.all(data.map((item) => getImage(item.name))),
    [
      data,
    ]
  );

  if (Array.isArray(data) && data.length === 0)
    return <Wrapper>Sorry, No Results Found</Wrapper>;

  return (
    <PlaceCardWrapper>
      {Array.isArray(data) ? (
        data.map(({ id, name, type, country_id }, index) => (
          <PlaceCard
            key={`searchresult_${index}`}
            to={
              type === "city"
                ? `/region/${country_id.replaceAll(
                    " ",
                    "_"
                  )}/cities/${id.replaceAll(" ", "_")}`
                : `/region/${id.replaceAll(" ", "_")}`
            }
          >
            <PlaceCard.TypeHeader>{type}</PlaceCard.TypeHeader>
            <PlaceCard.SubHeader mt="10%">{name}</PlaceCard.SubHeader>
            <PlaceCard.Background bgHeight="80%">
              {loadingImage ? (
                <i className="fas fa-circle-notch fa-spin"></i>
              ) : null}
              {imgResponse ? (
                <img
                  src={
                    imgResponse[index]?.data?.hits[2]?.webformatURL || noImage
                  }
                  alt=""
                />
              ) : null}
            </PlaceCard.Background>
          </PlaceCard>
        ))
      ) : (
        <FallBack />
      )}
    </PlaceCardWrapper>
  );
};

export default SearchResults;
