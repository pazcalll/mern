import { combineReducers } from "redux";
import addItemReducer from "./addItemReducer";
import homeReducer from "./homeReducer";

const reducer = combineReducers({homeReducer, addItemReducer})

export default reducer