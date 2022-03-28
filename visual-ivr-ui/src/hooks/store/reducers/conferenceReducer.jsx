const INITIAL_STATE = {
    conference: '',
}

const conferenceReducer = (state = INITIAL_STATE, action) => {
    if (action.type == 'SET_CONFERENCE_NAME'){
        state = action.payload; 
    }
    return state;
}

export default conferenceReducer; 