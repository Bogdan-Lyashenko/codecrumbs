const { setupGetCrumbs, setupdGetCommentsFromCode } = require('../default/codecrumbs');

const JAVA_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;
const getCrumbs = setupGetCrumbs(setupdGetCommentsFromCode(JAVA_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
