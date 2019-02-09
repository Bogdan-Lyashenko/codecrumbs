const { setupGetCrumbs, setupdGetCommentsFromCode } = require('../default/codecrumbs');

const TYPE_SCRIPT_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;
const getCrumbs = setupGetCrumbs(setupdGetCommentsFromCode(TYPE_SCRIPT_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
