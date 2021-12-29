import { combineReducers } from "redux";

import mapReducer from "./Map/map.reducer";
import userReducer from "./User/user.reducer";
import attractionReducer from "./Attraction/attraction.reducer";

const rootReducer = combineReducers({
  map: mapReducer,
  user: userReducer,
  attraction: attractionReducer,
});

export default rootReducer;
