import { combineReducers } from "redux";
import { bookingReducer } from "./hotels";

const rootReducer = combineReducers({
  bookingReducer,
});

export { rootReducer };
export type { Hotel } from "./types";
