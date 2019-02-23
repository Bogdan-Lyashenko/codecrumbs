const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const PHP_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(PHP_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
