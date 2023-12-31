// import {createStore} from "redux";
import rootReducer from "./Reducers/index.js";
import { legacy_createStore as createStore} from 'redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;