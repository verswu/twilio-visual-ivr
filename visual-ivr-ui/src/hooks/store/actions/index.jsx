import { SET_CONFERENCE_NAME, SET_EMAIL } from "../constants/action-types";

export const setConferenceName = ({conference}) => {
    return {type: SET_CONFERENCE_NAME, payload: {conference}}; 
}

export const setUserEmail = ({email}) => {
    return {type: SET_EMAIL, payload: {email}};
}