import { combineReducers } from "redux";
import dentistsReducer from "./Context/dentists/dentistsSlice";

export default combineReducers({
  dentists: dentistsReducer,
});
