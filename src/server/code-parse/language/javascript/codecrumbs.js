// TODO: fix when it's needed, currently is fine without AST
/*
const getCrumbs = (fileCode, path) => {
  const crumbsList = [];

  try {
    const ast = babylon.parse(fileCode, astParseConfig);
    if (ast.comments) {
      ast.comments.forEach(comment => {
        if (isCodecrumb(comment)) {
          const params = parseCodecrumbComment(comment);
          const crumbNodeLines = getNodeLines(comment);

          crumbsList.push(buildCrumb(params, crumbNodeLines));
        }
      });
    }

    return crumbsList;
  } catch (e) {
    console.log(path, e);
    return crumbsList;
  }
};*/

const { getCrumbs } = require('../default/codecrumbs');

// replace with own implementation if needed
module.exports = {
  getCrumbs
};
