import thunk from "redux-thunk";
import reducer from "./reducer/reducer";

import {createStore, applyMiddleware} from 'redux';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;