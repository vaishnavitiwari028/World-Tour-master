import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCities, getCountryCodes, getImage } from "../api/axios";
import { usePromise, useStartFromTop } from "../custom-hooks";
import { FallBack, Map, TopCity, Wrapper } from "../styled-compoenents";

const TopCitiesPage = () => {
  const { country } = useParams();

  const { loading: loadingCities, response: responseCities } = usePromise(() =>
    getAllCities(country)
  );
  const [activeInMap, setActiveInMap] = useState();
  const { response: responseCountryArea } = usePromise(() =>
    getCountryCodes(country)
  );
  useStartFromTop();

  const { loading: loadingImage, response: responseImage } = usePromise(() => {
    if (!responseCities?.data?.results) return;
    return Promise.all(
      responseCities?.data.results.map(({ name }) => getImage(name))
    );
  }, [responseCities]);

  if (loadingCities) return <FallBack />;
  return (
    <div>
      <Map
        area={responseCountryArea?.area}
        activeInMap={activeInMap}
        setActiveInMap={setActiveInMap}
        dataForMarker={responseCities?.data.results.map((city) => ({
          name: city.name,
          ...city.coordinates,
        }))}
      />
      <Wrapper direction="column" justify="space-around" width="93vw">
        {responseCities?.data.results.map((city, index) => (
          <TopCity
            key={`top-cities-${index}`}
            city={city}
            imgSrc={
              responseImage
                ? responseImage[index].data?.hits[2]?.largeImageURL
                : ""
            }
            setActiveInMap={setActiveInMap}
            loadingImage={loadingImage}
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default TopCitiesPage;
