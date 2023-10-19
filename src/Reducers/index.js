import changeTheNumber from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber : changeTheNumber            //in the form of object
});


export default rootReducer;