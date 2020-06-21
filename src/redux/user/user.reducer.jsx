/** @format */

const INITIAL_STATE = {
    currentUser: null,
    currentUserAuth: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
            };

        case 'SET_CURRENT_USER_AUTH':
            return {
                ...state,
                currentUserAuth: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
