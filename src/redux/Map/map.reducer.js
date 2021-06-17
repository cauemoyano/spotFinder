import { INCREMENT, SETBOUNDS, SETMAPDATA } from "./map.types";

const INITIAL_STATE = {
  data: {},
  bounds: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state;

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
