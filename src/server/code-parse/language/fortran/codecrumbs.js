const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

import { FORTRAN_REGEX } from "regex-comment/lib/index";
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(FORTRAN_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
