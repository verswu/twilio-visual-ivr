import { combineReducers } from "redux";
import conferenceReducer from './conferenceReducer'; 
import userReducer from './userReducer';

const rootReducer = {
    conference: conferenceReducer,
    user: userReducer,
}

export default combineReducers(rootReducer);