const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const GOLANG_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(GOLANG_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
