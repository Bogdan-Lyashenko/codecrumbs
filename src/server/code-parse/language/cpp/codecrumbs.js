const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const CPP_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(CPP_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
