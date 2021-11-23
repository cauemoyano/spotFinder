import { combineReducers } from "redux";

import mapReducer from "./Map/map.reducer";
import userReducer from "./User/user.reducer";

const rootReducer = combineReducers({
  map: mapReducer,
  user: userReducer,
});

export default rootReducer;
