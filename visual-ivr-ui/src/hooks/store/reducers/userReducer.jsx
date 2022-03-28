const INITIAL_STATE = {
    email: '',
}

const setEmailReducer = (state = INITIAL_STATE, action) => {
    if (action.type == 'SET_EMAIL') {
        return state = action.payload;
    }
    return state;
}

// const rootReducer = () => {
//     return {
//         setEmailReducer,
//     }
// }

export default setEmailReducer;