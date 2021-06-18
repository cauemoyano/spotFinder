import { BROADENBOUNDS, SETMAPDATA, SETBOUNDS } from "./map.types";

export const setBroadenBounds = (bounds) => {
  return {
    type: BROADENBOUNDS,
    payload: bounds,
  };
};

export const setBounds = (bounds) => {
  return {
    type: SETBOUNDS,
    payload: bounds,
  };
};

export const setMapData = (data) => {
  return {
    type: SETMAPDATA,
    payload: data,
  };
};
