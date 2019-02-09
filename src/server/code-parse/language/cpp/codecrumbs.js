const { setupGetCrumbs, setupdGetCommentsFromCode } = require('../default/codecrumbs');

const CPP_COMMENT_REGEX = /^([^\/\/]*)\/\/(.*)$/;
const getCrumbs = setupGetCrumbs(setupdGetCommentsFromCode(CPP_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
