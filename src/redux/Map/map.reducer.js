import {
  BROADENBOUNDS,
  SETBOUNDS,
  SETMAPDATA,
  SETBOUNDSATTRACTIONS,
  SETVIEWPORTATTRACTIONS,
} from "./map.types";

const INITIAL_STATE = {
  data: {},
  bounds: [],
  broadenBounds: null,
  broadenAttractions: null,
  viewportAttractions: null,
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
    case SETBOUNDSATTRACTIONS:
      return {
        ...state,
        broadenAttractions: action.payload,
      };

    case SETVIEWPORTATTRACTIONS:
      return {
        ...state,
        viewportAttractions: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
