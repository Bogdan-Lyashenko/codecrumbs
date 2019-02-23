const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const TYPE_SCRIPT_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(TYPE_SCRIPT_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
