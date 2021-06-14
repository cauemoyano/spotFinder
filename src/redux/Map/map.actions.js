import { INCREMENT, DECREMENT, SETMAPDATA } from "./map.types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const setMapData = (data) => {
  console.log(data);
  return {
    type: SETMAPDATA,
    payload: data,
  };
};
