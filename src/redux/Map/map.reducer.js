import {
  BROADENBOUNDS,
  SETBOUNDS,
  SETMAPDATA,
  SETBOUNDSATTRACTIONS,
  SETVIEWPORTATTRACTIONS,
  SETSHOWDETAILSMODAL,
  SETATTRACTIONSDETAILS,
} from "./map.types";

const INITIAL_STATE = {
  data: {},
  bounds: [],
  broadenBounds: null,
  broadenAttractions: null,
  viewportAttractions: null,
  showDetailsModal: false,
  attractionDetails: null,
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

    case SETSHOWDETAILSMODAL:
      return {
        ...state,
        showDetailsModal: action.payload.status,
        attractionDetails: action.payload.data,
      };

    default:
      return state;
  }
};

export default reducer;
