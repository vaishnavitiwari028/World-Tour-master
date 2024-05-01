import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getCountriesFromRegion } from "../api/axios";
import { usePromise } from "../custom-hooks";
import {
  CountrySelection,
  FallBack,
  FilterByLetters,
} from "../styled-compoenents";

const RegionPage = () => {
  const { region } = useParams();
  const [letter, setLetter] = useState();

  const { loading, response } = usePromise(() =>
    getCountriesFromRegion(region)
  );
  if (loading) return <FallBack />;
  return (
    <>
      <FilterByLetters letter={letter} setLetter={setLetter} />
      <CountrySelection
        region={region}
        letter={letter}
        countries={response?.data}
      />
    </>
  );
};

export default RegionPage;
