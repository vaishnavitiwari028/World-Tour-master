import React from "react";
import noImage from "../../assets/no_image-sm.png";
import { Header } from "../../styled-compoenents";
import {
  DescriptionContainer,
  DescriptionHeaderContainer,
  DescriptionText,
  PlaceDetailsContainer,
} from "./PlaceDetailsParts";

const PlaceDetails = ({ place, loadingImage, imgSrc, setActiveInMap }) => {
  return (
    <PlaceDetailsContainer id={`scroll_${place.name}`}>
      <DescriptionHeaderContainer>
        <Header>
          {place.name}
          <span>
            <i
              title="view on map"
              onClick={() => {
                document.getElementById("MAIN_MAP")?.scrollIntoView();
                setActiveInMap(place);
              }}
              className="fas fa-map-marker-alt fa-lg"
            ></i>
          </span>
        </Header>
        <i style={{ color: "gold" }} className="fas fa-star"></i>
        {place.score.toFixed(1)}
      </DescriptionHeaderContainer>
      <DescriptionContainer isBgImg={!!imgSrc} loadingImage={loadingImage}>
        {loadingImage ? (
          <i className="fas fa-circle-notch fa-spin"></i>
        ) : (
          <img src={imgSrc || noImage} alt="" />
        )}
        <DescriptionText>{place.snippet}</DescriptionText>
      </DescriptionContainer>
    </PlaceDetailsContainer>
  );
};

export default PlaceDetails;
