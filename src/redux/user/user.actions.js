/** @format */

import { UserActionTypes } from './user.types';

const setCurrentUser = user => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    };
};

const setCurrentUserAuth = userAuth => {
    return {
        type: UserActionTypes.SET_CURRENT_USER_AUTH,
        payload: userAuth,
    };
};

export { setCurrentUser, setCurrentUserAuth };
