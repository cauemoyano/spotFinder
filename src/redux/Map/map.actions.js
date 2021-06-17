import { INCREMENT, SETMAPDATA, SETBOUNDS } from "./map.types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
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
