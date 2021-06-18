import { BROADENBOUNDS, SETBOUNDS, SETMAPDATA } from "./map.types";

const INITIAL_STATE = {
  data: {},
  bounds: [],
  broadenBounds: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BROADENBOUNDS:
      return {
        ...state,
        broadenBounds: action.payload,
      };

    case SETBOUNDS:
      return {
        ...state,
        bounds: action.payload,
      };

    case SETMAPDATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
