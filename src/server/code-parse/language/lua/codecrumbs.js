const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

import { LUA_REGEX } from "regex-comment/lib/index";
const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(LUA_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
