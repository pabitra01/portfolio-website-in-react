import {color,theme} from "./reducer";
import { combineReducers } from "redux";
const rootReducer= combineReducers({
    color,
    theme,
});
export default rootReducer
