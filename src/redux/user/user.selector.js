/** @format */

const { createSelector } = require('reselect');

const selectUser = state => state.user;

const selectCurrentUser = createSelector([selectUser], user => user.currentUser);

const selectCurrentUserAuth = createSelector([selectUser], user => user.currentUserAuth);

export { selectCurrentUser, selectCurrentUserAuth };
