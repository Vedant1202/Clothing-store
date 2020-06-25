/** @format */

import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    currentUserAuth: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };

        case UserActionTypes.SET_CURRENT_USER_AUTH:
            return {
                ...state,
                currentUserAuth: payload,
            };

        default:
            return state;
    }
};

export default userReducer;
