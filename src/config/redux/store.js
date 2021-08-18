import thunk from "redux-thunk";

const {createStore, applyMiddleware} = require("redux");

const initialState = {
    dataGoods:[],
    name: "yz",
    page: {
        currentPage: 1,
        totalPage: 1
    }
}

const reducer = (state = initialState, action) =>{
    if(action.type === 'UPDATE_DATA_GOODS'){
        return {
            ...state,
            dataGoods: action.payload
        }
    }
    if(action.type === 'UPDATE_NUMBER'){
        return {
            ...state,
            page: action.payload
        }
    }
    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;