const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

import { PERL_REGEX } from "regex-comment/lib/index";
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(PERL_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
