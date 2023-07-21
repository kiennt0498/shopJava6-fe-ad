import { combineReducers } from "redux";
import CategoryReducer from "../redux/reducers/CategoryReducer";
import commonReducer from "./reducers/commonReducer";
const rootReducer = combineReducers({
  CategoryReducer,
  commonReducer,
});

export default rootReducer;
