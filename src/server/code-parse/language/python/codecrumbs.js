const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const PYTHON_COMMENT_REGEX = /^([^#]*)#(.*)$/g;
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(PYTHON_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
