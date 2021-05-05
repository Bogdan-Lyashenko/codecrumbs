const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

import { PYTHON_REGEX } from "regex-comment/lib/index";
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(PYTHON_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
