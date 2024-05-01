import React, { useState } from "react";
import {
  Header,
  HeroImage,
  Map,
  PopularDestinations,
  RegionSelection,
  SearchBar,
  Wrapper,
} from "../styled-compoenents";

const LandingPage = () => {
  const [hoveredRegion, setHoveredRegion] = useState();

  return (
    <Wrapper direction="column">
      <HeroImage
        fixed
        imgSrc={`https://res.cloudinary.com/image/upload/c_scale,f_auto,h_1016,q_auto,w_1280/v1615122749/worldtour/aerial-view-city-coastline-turkey_k0gw6e.jpg`}
        alt="City by the beach"
      >
        <HeroImage.Content top="20%" left="1rem">
          <Header mt="2rem" color="white">
            You're going on <br /> an adventure!
          </Header>
          <SearchBar />
        </HeroImage.Content>
      </HeroImage>
      <RegionSelection setHoveredRegion={setHoveredRegion} />
      <Map round={true} disableDragging={true} region={hoveredRegion} />
      <PopularDestinations />
    </Wrapper>
  );
};

export default LandingPage;
