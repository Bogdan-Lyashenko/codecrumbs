const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');
import { HASKELL_REGEX } from "regex-comment/lib/index";

const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(HASKELL_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
console.log('//foo')
