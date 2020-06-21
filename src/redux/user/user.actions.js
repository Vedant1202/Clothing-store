const setCurrentUser = (user) => {
    return ({
        type: 'SET_CURRENT_USER',
        payload: user,
    });
}

const setCurrentUserAuth = (userAuth) => {
    return ({
        type: 'SET_CURRENT_USER_AUTH',
        payload: userAuth,
    });
}

export { setCurrentUser, setCurrentUserAuth };
