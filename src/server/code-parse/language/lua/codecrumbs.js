const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const LUA_COMMENT_REGEX = /^([^--]*)--(.*)$/;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(LUA_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
