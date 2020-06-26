/** @format */

const { createSelector } = require('reselect');

const selectDirectory = state => state.directory;

const selectDirectorySections = createSelector([selectDirectory], directory => directory.sections);

export { selectDirectorySections };
