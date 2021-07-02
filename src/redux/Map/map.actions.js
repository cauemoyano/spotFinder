import {
  BROADENBOUNDS,
  SETMAPDATA,
  SETBOUNDS,
  SETBOUNDSATTRACTIONS,
  SETVIEWPORTATTRACTIONS,
} from "./map.types";

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
export const setBoundsAttractions = (data) => {
  return {
    type: SETBOUNDSATTRACTIONS,
    payload: data,
  };
};
export const setViewportAttractions = (data) => {
  return {
    type: SETVIEWPORTATTRACTIONS,
    payload: data,
  };
};
