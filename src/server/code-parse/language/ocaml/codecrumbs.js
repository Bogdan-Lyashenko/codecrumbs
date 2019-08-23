const { setupGetCrumbs, setupGetCommentsFromCode } = require('../default/codecrumbs');

const OCAML_COMMENT_REGEX = /\/\*(.*?)\*\//gm;

const getCrumbs = setupGetCrumbs(setupGetCommentsFromCode(OCAML_COMMENT_REGEX));

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
