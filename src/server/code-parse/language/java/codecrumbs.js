const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const JAVA_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(JAVA_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
