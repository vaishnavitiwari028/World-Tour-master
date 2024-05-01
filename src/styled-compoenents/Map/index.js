import React from "react";
import { MapContainer } from "react-leaflet";
import MapChildren from "./MapChildren";

const position = [40.52, 14.34];

const Map = ({
  dataForMarker,
  center,
  country,
  zoom,
  region,
  halfScreen,
  round,
  area,
  disableDragging,
  activeInMap,
  setActiveInMap,
}) => {
  return (
    <MapContainer
      id="MAIN_MAP"
      style={{
        width: halfScreen ? "50vw" : "88vw",
        height: halfScreen ? "88vh" : "90vh",
        margin: halfScreen ? "3rem" : "2rem auto",
        float: halfScreen ? "left" : "",
        borderRadius: round ? "50%" : "",
      }}
      center={center || position}
      placeholder={<div>loading map...</div>}
      zoom={zoom || 2}
      minZoom={2}
      zoomControl={disableDragging ? false : true}
      dragging={disableDragging ? false : true}
      keyboard={disableDragging ? false : true}
      scrollWheelZoom={disableDragging ? false : true}
      doubleClickZoom={disableDragging ? false : true}
    >
      <MapChildren
        regionInMap={region}
        countryinMap={country}
        dataForMarker={dataForMarker}
        area={area}
        activeInMap={activeInMap}
        setActiveInMap={setActiveInMap}
      />
    </MapContainer>
  );
};

export default Map;
