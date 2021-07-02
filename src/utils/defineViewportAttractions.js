import store from "../redux/store";

import { setViewportAttractions } from "../redux/Map/map.actions";

export const defineViewportAttractions = (bounds, broadenAttractions) => {
  if (!broadenAttractions) return;
  const {
    _northEast: { lat: mxLat, lng: mxLon },
    _southWest: { lat: miLat, lng: miLon },
  } = bounds;

  const result = broadenAttractions.filter((attraction) => {
    const {
      point: { lat, lon },
    } = attraction;
    if (lat >= miLat && lat <= mxLat && lon >= miLon && lon <= mxLon) {
      return true;
    }
    return false;
  });
  console.log(result);
  store.dispatch(setViewportAttractions(result));
};
