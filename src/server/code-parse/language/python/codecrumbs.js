const { setupGetCrumbs, setupdGetCommentsFromCode } = require('../default/codecrumbs');

const PYTHON_COMMENT_REGEX = /^([^#]*)#(.*)$/;
const getCrumbs = setupGetCrumbs(setupdGetCommentsFromCode(PYTHON_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
