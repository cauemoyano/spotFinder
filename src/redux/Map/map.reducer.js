import { INCREMENT, DECREMENT, SETMAPDATA } from "./map.types";

const INITIAL_STATE = {
  data: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state;

    case DECREMENT:
      return state;

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
