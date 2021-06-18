import { fetchDataWithTimeout } from "./fetchDataWithTimeout";

import { setBroadenBounds } from "../redux/Map/map.actions";

import store from "../redux/store";

export const getAttractions = async (bounds) => {
  console.log("getattractions");
  const {
    _northEast: { lat: mxLat, lng: mxLon },
    _southWest: { lat: miLat, lng: miLon },
  } = bounds;

  let minLon = parseFloat(miLon);
  let maxLon = parseFloat(mxLon);
  let minLat = parseFloat(miLat);
  let maxLat = parseFloat(mxLat);

  //broaden the search
  const broadMin = (coordinate) => {
    return coordinate - 0.3;
  };
  const broadMax = (coordinate) => {
    return coordinate + 0.3;
  };

  minLon = broadMin(minLon);
  maxLon = broadMax(maxLon);
  maxLat = broadMax(maxLat);
  minLat = broadMin(minLat);

  store.dispatch(
    setBroadenBounds({
      _northEast: { lat: maxLat, lng: maxLon },
      _southWest: { lat: minLat, lng: minLon },
    })
  );

  let result = [];

  const checkAmount = async (minLon, maxLon, minLat, maxLat) => {
    const attractions = await fetchDataWithTimeout(
      `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${minLon}&lon_max=${maxLon}&lat_min=${minLat}&lat_max=${maxLat}&rate=3&format=count&limit=15000&apikey=${process.env.REACT_APP_MAP_TOKEN}`
    );
    return attractions;
  };

  const handleSearch = async (minLon, maxLon, minLat, maxLat) => {
    const amount = await checkAmount(minLon, maxLon, minLat, maxLat);

    if (amount.count < 500) {
      const tempResult = await fetchDataWithTimeout(
        `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${minLon}&lon_max=${maxLon}&lat_min=${minLat}&lat_max=${maxLat}&rate=3&format=json&limit=15000&apikey=${process.env.REACT_APP_MAP_TOKEN}`
      );
      return await tempResult;
    } else {
      const tiles = splitCoordinates(minLon, maxLon, minLat, maxLat);

      const tile1 = await handleSearch(
        tiles.tile1.lonMin,
        tiles.tile1.lonMax,
        tiles.tile1.latMin,
        tiles.tile1.latMax
      );

      const tile2 = await handleSearch(
        tiles.tile2.lonMin,
        tiles.tile2.lonMax,
        tiles.tile2.latMin,
        tiles.tile2.latMax
      );
      const tile3 = await handleSearch(
        tiles.tile3.lonMin,
        tiles.tile3.lonMax,
        tiles.tile3.latMin,
        tiles.tile3.latMax
      );
      const tile4 = await handleSearch(
        tiles.tile4.lonMin,
        tiles.tile4.lonMax,
        tiles.tile4.latMin,
        tiles.tile4.latMax
      );
      const tempResult = [...tile1, ...tile2, ...tile3, ...tile4];

      return tempResult;
    }
  };

  const splitCoordinates = (minLon, maxLon, minLat, maxLat) => {
    const middleLon = (minLon, maxLon) => {
      return minLon < 0
        ? maxLon + (minLon - maxLon) / 2
        : minLon + (maxLon - minLon) / 2;
    };
    const middleLat = (minLat, maxLat) => {
      return minLat < 0
        ? maxLat + (minLat - maxLat) / 2
        : minLat + (maxLat - minLat) / 2;
    };
    const tempBounds = {
      tile1: {
        lonMin: minLon,
        lonMax: middleLon(minLon, maxLon),
        latMin: middleLat(minLat, maxLat),
        latMax: maxLat,
      },
      tile2: {
        lonMin: middleLon(minLon, maxLon),
        lonMax: maxLon,
        latMin: middleLat(minLat, maxLat),
        latMax: maxLat,
      },
      tile3: {
        lonMin: minLon,
        lonMax: middleLon(minLon, maxLon),
        latMin: minLat,
        latMax: middleLat(minLat, maxLat),
      },
      tile4: {
        lonMin: middleLon(minLon, maxLon),
        lonMax: maxLon,
        latMin: minLat,
        latMax: middleLat(minLat, maxLat),
      },
    };
    return tempBounds;
  };
  result = await handleSearch(minLon, maxLon, minLat, maxLat);
  result = await result;
  console.log(result);
  /* .then((attractions) => {
    console.log(attractions);
    if (attractions < 500) {
      fetchData(
        `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${minLon}&lon_max=${maxLon}&lat_min=${minLat}&lat_max=${maxLat}&rate=1&format=json&limit=5000&apikey=5ae2e3f221c38a28845f05b6484f463aeb66bd736d2d3ecdb85a6368`
      ).then((data) => console.log(data));
    }
  }); */
};
