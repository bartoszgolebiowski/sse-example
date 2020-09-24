import { combineReducers } from "redux";

import chartsReducer from "./charts/chartsReducer";

const rootReducer = combineReducers({
  chartsReducer,
});

export default rootReducer;
