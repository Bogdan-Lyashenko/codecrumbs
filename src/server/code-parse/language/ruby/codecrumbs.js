const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const RUBY_COMMENT_REGEX = /^([^#]*)#(.*)$/g;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(RUBY_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
