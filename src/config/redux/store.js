const {createStore} = require("redux");

const initialState = {
    dataItem:[],
    name: "yz"
}

const reducer = (state = initialState, action) =>{
    return state;
}

const store = createStore(reducer);

export default store;