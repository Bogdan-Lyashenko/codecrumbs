const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const PERL_COMMENT_REGEX = /^([^#]*)#(.*)$/g;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(PERL_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
