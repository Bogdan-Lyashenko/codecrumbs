const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

import { OCAML_REGEX } from "regex-comment/lib/index";
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(OCAML_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
