const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

import { RUBY_REGEX } from "regex-comment/lib/index";
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(RUBY_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
