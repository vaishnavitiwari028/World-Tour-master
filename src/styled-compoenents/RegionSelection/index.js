import React from "react";
import { RegionCard, RegionWrapper } from "./RegionCard";

const regions = ["Asia", "Europe", "Americas", "Africa", "Oceania"];

const RegionSelection = ({ setHoveredRegion }) => {
  return (
    <RegionWrapper>
      {regions.map((region, index) => (
        <RegionCard
          key={`region_selection-${index}`}
          onMouseOver={() => {
            setHoveredRegion(region);
          }}
          to={region.replaceAll(" ", "_")}
        >
          {region}
        </RegionCard>
      ))}
    </RegionWrapper>
  );
};

export default RegionSelection;
