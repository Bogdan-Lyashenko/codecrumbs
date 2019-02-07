const babylon = require('@babel/parser');

const { isCodecrumb, parseCodecrumbComment, buildCrumb } = require('../default/codecrumbs');
const { config: astParseConfig, getNodeLines } = require('./astParse');

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
};

module.exports = {
  getCrumbs
};
