import axios from "axios";
import { Account_ID, API_KEY, IMAGE_API_KEY } from "../constants";
import { db } from "./firebaseutils";

const cached = {
  fetchedRegions: [],
  countries: {},
  cities: {},
  cityDetails: {},
  images: {},
  countriesIdentifiers: [],
};

const instance = axios.create({
  baseURL: "https://www.triposo.com/api/20201111",
  params: {
    account: Account_ID,
    token: API_KEY,
  },
});

const imageInstance = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: IMAGE_API_KEY,
  },
});

export const getCountryCodes = async (country) => {
  const data = await instance.get(
    `https://restcountries.eu/rest/v2/name/${country}?fields=name;altSpellings;capital;alpha2Code;alpha3Code;area;`
  );

  if (Array.isArray(data?.data) && data?.data.length > 1) {
    return data.data.find(
      (result) =>
        result.name === country || result.altSpellings.includes(country)
    );
  } else if (Array.isArray(data?.data)) {
    return data.data[0];
  }
};

export const getGeoData = async ({ ISOcode, country, region }) => {
  if (region) {
    let data = require(`../data/regions/${region}.geo.json`);
    return data;
  }

  let code;
  if (ISOcode) {
    code = ISOcode;
  } else if (country) {
    country = country.replaceAll("_", " ");

    let codeFromCache = cached.countriesIdentifiers.find(
      (country) =>
        country.name === country || country.altSpellings?.includes(country)
    )?.alpha3Code;
    if (codeFromCache) {
      code = codeFromCache;
    } else {
      let result = await getCountryCodes(country);
      let codeFromApi = result.alpha3Code;
      if (codeFromApi) {
        code = codeFromApi;
      }
      cached.countriesIdentifiers = cached.countriesIdentifiers.concat(result);
    }
  }

  let value = await db.ref(`/geoData/${code}`).once("value");
  let data = await value.val();

  return data;
};

export const getCountriesFromRegion = async (region) => {
  if (!region) return;
  if (cached.fetchedRegions.includes(region)) {
    return {
      data: cached.countriesIdentifiers.filter(
        (country) => country.region === region
      ),
    };
  }

  let data = await axios.get(
    `https://restcountries.eu/rest/v2/region/${region.toLowerCase()}?fields=name;capital;alpha2Code;alpha3Code;flag;altSpellings;latlng;area;`
  );

  let results = data.data;
  cached.fetchedRegions.push(region);
  cached.countriesIdentifiers = cached.countriesIdentifiers.concat(
    results.map((country) => ({ region, ...country }))
  );

  return data;
};

export const getCountryDetails = async (country) => {
  if (!country) return;
  if (country in cached.countries) {
    return cached.countries[country];
  }

  let data = await instance.get(
    `/location.json?tag_labels=country&annotate=trigram:${country}&trigram=>=0.3&count=10&fields=id,name,names,score,snippet,properties,content,coordinates&order_by=-score`
  );
  cached.countries[country] = data;
  return data;
};

export const getAllCities = async (country) => {
  if (!country) return;
  if (country in cached.cities) {
    return cached.cities[country];
  }
  let data = await instance.get(
    `/location.json?part_of=${country}&tag_labels=city&count=20&fields=id,name,properties,score,snippet,coordinates&order_by=-score`
  );

  cached.cities[country] = data;
  return data;
};

export const getCityDetails = async (city) => {
  if (!city) return;
  if (city in cached.cityDetails) {
    return cached.cityDetails[city];
  }

  let data = await instance.get(
    `/poi.json?location_id=${city}&count=10&fields=id,name,score,content,images,snippet,location_id,coordinates&order_by=-score`
  );
  cached.cityDetails[city] = data;
  return data;
};

export const getImage = async (q) => {
  if (!q) return;
  if (q in cached.images) {
    return cached.images[q];
  }
  let img = await imageInstance.get("", {
    params: { q, category: "background", per_page: 3 },
  });
  cached.images[q] = img;
  return img;
};

export const searchPlace = async (query) => {
  if (!query) return [];
  const data = await instance.get(
    `location.json?annotate=trigram:${query.trim()}&trigram=>=0.3`
  );
  return data;
};

export default instance;
