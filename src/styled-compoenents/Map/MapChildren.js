import React, { useEffect, useRef } from "react";
import { GeoJSON, TileLayer, useMap } from "react-leaflet";
import { useParams } from "react-router-dom";
import { getGeoData } from "../../api/axios";
import { usePromise } from "../../custom-hooks";
import MapPopup from "./MapPopup";

const MapChildren = ({
  dataForMarker,
  countryinMap,
  regionInMap,
  area,
  activeInMap,
  setActiveInMap,
}) => {
  const map = useMap();

  const { country } = useParams();
  const { response: geoData } = usePromise(
    () => getGeoData({ country: country || countryinMap, region: regionInMap }),
    [regionInMap, countryinMap]
  );

  let f = useRef();
  const justifyZoom = (area) => {
    if (area < 2600) return 9;
    else if (area < 12000) return 8;
    else if (area < 69000) return 7;
    else if (area < 180000) return 6;
    else if (area < 240000) return 5;
    else if (area < 800000) return 4;
    else if (area < 3380000) return 3;
  };

  useEffect(() => {
    if (Array.isArray(countryinMap)) {
      let area = Number.parseInt(
        countryinMap[0].properties.find(({ key }) => key === "area")?.value
      );
      map.setZoom(justifyZoom(area));
    }
    if (countryinMap)
      map.flyTo([
        countryinMap[0].coordinates.latitude,
        countryinMap[0].coordinates.longitude,
      ]);
    if (geoData) {
      f.current?.clearLayers();
      f.current?.addData(geoData);
      if (!regionInMap && !countryinMap)
        map.flyTo([dataForMarker[0].latitude, dataForMarker[0].longitude]);
    }
  }, [geoData, countryinMap]);

  useEffect(() => {
    if (dataForMarker) {
      if (dataForMarker[0]) {
        map.flyTo([dataForMarker[0].latitude, dataForMarker[0].longitude]);
      }
      if (area) map.setZoom(justifyZoom(area));
    }
  }, [dataForMarker, area]);

  const purpleOptions = { color: "purple" };
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        pathOptions={purpleOptions}
        onEachFeature={(country, layer) => {
          layer.bindTooltip(`${country.properties.name}`);
        }}
        ref={f}
      />
      {dataForMarker
        ? dataForMarker.map((each, index) => (
            <MapPopup
              key={`map_popup-${index}`}
              activeInMap={activeInMap}
              each={each}
              setActiveInMap={setActiveInMap}
            />
          ))
        : null}
    </>
  );
};

export default MapChildren;
