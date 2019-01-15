const babylon = require('@babel/parser');
const babelTraverse = require('@babel/traverse');

const { config: astParseConfig, getNodeLines } = require('../../../shared/astParse');
const NO_TRAIL_FLOW = require('../../../shared/constants').NO_TRAIL_FLOW;

const CRUMB = 'codecrumb',
  CRUMB_SHORT_HANDLER = 'cc';

const getCommentNodeValue = node => (node.value || '').trim();

const parseCodecrumbComment = (node = {}) => {
  const comment = getCommentNodeValue(node);

  const cc = { original: comment };
  try {
    const afterAlias = comment.split(':')[1];
    if (afterAlias) {
      const params = afterAlias.split(';');
      //check if has flow marker
      let counter = 0;
      if (params[0].includes('#')) {
        const flowParams = params[0].split('#');
        cc.flow = flowParams[0];
        cc.flowStep = +flowParams[1];
        counter++;
      } else {
        cc.flow = NO_TRAIL_FLOW;
      }

      cc.name = params[counter];
      if (params[counter + 1] && params[counter + 1][0] === '+') {
        cc.linesRange = +params[counter + 1].substr(1);
        counter++;
      }
      cc.details = params[counter + 1];
    }
  } catch (e) {
    console.error('Parameters parsing failed: ', e);
  }

  return cc;
};

const isCodecrumb = (node = {}) => {
  const comment = getCommentNodeValue(node);
  return comment.startsWith(CRUMB) || comment.startsWith(CRUMB_SHORT_HANDLER);
};

const getCrumbs = (fileCode, path) => {
  let ast = {};
  const crumbsList = [];

  try {
    ast = babylon.parse(fileCode, astParseConfig);

    // TODO: ast has comments array, maybe use it
    babelTraverse.default(ast, {
      enter(path) {
        const node = path.node;
        if (!node || !(node.leadingComments || node.trailingComments)) return;

        const leadingComment = node.leadingComments
          ? node.leadingComments[node.leadingComments.length - 1]
          : null;

        let trailingComment = node.trailingComments ? node.trailingComments[0] : null;

        if (trailingComment && trailingComment.loc.start.line !== node.loc.start.line) {
          trailingComment = null;
        }

        [leadingComment, trailingComment].forEach(comment => {
          if (comment && isCodecrumb(comment)) {
            const params = parseCodecrumbComment(comment);

            const loc = comment.loc.start;
            const crumbNodeLines = getNodeLines(comment);
            crumbsList.push({
              name: params.name || '', //TODO: check, can be bug with layout calc
              displayLoc: `#${loc.line}`,
              crumbNodeLines: params.linesRange
                ? [crumbNodeLines[0], crumbNodeLines[1] + params.linesRange]
                : crumbNodeLines,
              params
            });
          }
        });
      }
    });

    return crumbsList;
  } catch (e) {
    console.log(path, e);
    return crumbsList;
  }
};

module.exports = {
  getCrumbs
};
