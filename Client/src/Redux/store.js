import { legacy_createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Authentication/Reducer";





const rootReducers = combineReducers({
 user: userReducer,
 
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
