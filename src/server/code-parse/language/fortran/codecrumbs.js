const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const FORTRAN_COMMENT_REGEX = /(^!.*)/gm;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(FORTRAN_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
